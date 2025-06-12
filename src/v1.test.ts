import * as grpc from "@grpc/grpc-js";
import { generateTestToken } from "./__utils__/helpers.js";
import { Struct } from "./authzedapi/google/protobuf/struct.js";
import { PreconnectServices, deadlineInterceptor } from "./util.js";
import {
  BulkExportRelationshipsRequest,
  BulkExportRelationshipsResponse,
  BulkImportRelationshipsRequest,
  CheckPermissionRequest,
  CheckPermissionResponse,
  CheckPermissionResponse_Permissionship,
  ClientSecurity,
  Consistency,
  ContextualizedCaveat,
  LookupResourcesRequest,
  LookupResourcesResponse,
  LookupSubjectsRequest,
  LookupSubjectsResponse,
  NewClient,
  ObjectReference,
  PermissionsServiceClient,
  Relationship,
  RelationshipUpdate,
  RelationshipUpdate_Operation,
  SubjectReference,
  WriteRelationshipsRequest,
  WriteRelationshipsResponse,
  WriteSchemaRequest,
  createStructFromObject,
  PbNullValue,
} from "./v1.js";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("a check with an unknown namespace", () => {
  it("should raise a failed precondition", () =>
    new Promise<void>((done) => {
      const resource = ObjectReference.create({
        objectType: "test/somenamespace",
        objectId: "bar",
      });

      const testUser = ObjectReference.create({
        objectType: "test/user",
        objectId: "someuser",
      });

      const checkPermissionRequest = CheckPermissionRequest.create({
        resource,
        permission: "someperm",
        subject: SubjectReference.create({
          object: testUser,
        }),
      });

      const client = NewClient(
        generateTestToken("v1-test-unknown"),
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );
      client.checkPermission(checkPermissionRequest, function (err, response) {
        expect(response).toBe(undefined);
        expect(err?.code).toBe(grpc.status.FAILED_PRECONDITION);
        client.close();
        done();
      });
    }));
});

describe("a check with an known namespace", () => {
  it("should succeed", () =>
    new Promise<void>((done) => {
      // Write some schema.
      const client = NewClient(
        generateTestToken("v1-namespace"),
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
        PreconnectServices.PERMISSIONS_SERVICE |
          PreconnectServices.SCHEMA_SERVICE,
      );

      const request = WriteSchemaRequest.create({
        schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
      });

      new Promise((resolve) => {
        client.writeSchema(request, function (err, response) {
          expect(err).toBe(null);
          resolve(response);
        });
      })
        .then((schemaResponse) => {
          expect(schemaResponse).toBeTruthy();

          return new Promise((resolve) => {
            // Write a relationship.
            const resource = ObjectReference.create({
              objectType: "test/document",
              objectId: "somedocument",
            });

            const testUser = ObjectReference.create({
              objectType: "test/user",
              objectId: "someuser",
            });

            const writeRequest = WriteRelationshipsRequest.create({
              updates: [
                RelationshipUpdate.create({
                  relationship: Relationship.create({
                    resource: resource,
                    relation: "viewer",
                    subject: SubjectReference.create({
                      object: testUser,
                    }),
                  }),
                  operation: RelationshipUpdate_Operation.CREATE,
                }),
              ],
            });

            client.writeRelationships(writeRequest, function (err, response) {
              expect(err).toBe(null);
              resolve({ response, resource, testUser });
            });
          });
        })
        .then((vals) => {
          const { response, resource, testUser } = vals as {
            response: WriteRelationshipsResponse;
            resource: ObjectReference;
            testUser: ObjectReference;
          };
          expect(response).toBeTruthy();

          return new Promise((resolve) => {
            // Call check.
            const checkPermissionRequest = CheckPermissionRequest.create({
              resource,
              permission: "view",
              subject: SubjectReference.create({
                object: testUser,
              }),
              consistency: Consistency.create({
                requirement: {
                  oneofKind: "fullyConsistent",
                  fullyConsistent: true,
                },
              }),
            });

            client.checkPermission(
              checkPermissionRequest,
              function (err, response) {
                expect(err).toBe(null);
                resolve(response);
              },
            );
          });
        })
        .then((response) => {
          const checkResponse = response as CheckPermissionResponse;
          expect(checkResponse?.permissionship).toBe(
            CheckPermissionResponse_Permissionship.HAS_PERMISSION,
          );

          client.close();
          done();
        });
    }));

  describe("with caveated relations", () => {
    it("should succeed", () =>
      new Promise<void>((done) => {
        // Write some schema.
        const client = NewClient(
          generateTestToken("v1-namespace-caveats"),
          "localhost:50051",
          ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
        );

        const request = WriteSchemaRequest.create({
          schema: `definition test/user {}

          caveat has_special_attribute(special bool) {
            special == true
          }

          definition test/document {
            relation viewer: test/user
            relation caveated_viewer: test/user with has_special_attribute
            permission view = viewer + caveated_viewer
          }
      `,
        });

        new Promise((resolve) => {
          client.writeSchema(request, function (err, response) {
            expect(err).toBe(null);
            resolve(response);
          });
        })
          .then((schemaResponse) => {
            expect(schemaResponse).toBeTruthy();

            return new Promise((resolve) => {
              // Write a relationship.
              const resource = ObjectReference.create({
                objectType: "test/document",
                objectId: "somedocument",
              });

              const testUser = ObjectReference.create({
                objectType: "test/user",
                objectId: "specialuser",
              });

              const writeRequest = WriteRelationshipsRequest.create({
                updates: [
                  RelationshipUpdate.create({
                    relationship: Relationship.create({
                      resource: resource,
                      relation: "caveated_viewer",
                      subject: SubjectReference.create({
                        object: testUser,
                      }),
                      optionalCaveat: ContextualizedCaveat.create({
                        caveatName: "has_special_attribute",
                      }),
                    }),
                    operation: RelationshipUpdate_Operation.CREATE,
                  }),
                ],
              });

              client.writeRelationships(writeRequest, function (err, response) {
                expect(err).toBe(null);
                resolve({ response, resource, testUser });
              });
            });
          })
          .then((vals) => {
            const { response, resource, testUser } = vals as {
              response: WriteRelationshipsResponse;
              resource: ObjectReference;
              testUser: ObjectReference;
            };
            expect(response).toBeTruthy();

            return new Promise((resolve) => {
              // Call check when user has special attribute.
              const checkPermissionRequest = CheckPermissionRequest.create({
                resource,
                permission: "view",
                subject: SubjectReference.create({
                  object: testUser,
                }),
                consistency: Consistency.create({
                  requirement: {
                    oneofKind: "fullyConsistent",
                    fullyConsistent: true,
                  },
                }),
                context: Struct.fromJson({ special: true }),
              });

              client.checkPermission(
                checkPermissionRequest,
                function (err, response) {
                  expect(err).toBe(null);
                  resolve(response);
                },
              );
            });
          })
          .then((response) => {
            const checkResponse = response as CheckPermissionResponse;
            expect(checkResponse?.permissionship).toBe(
              CheckPermissionResponse_Permissionship.HAS_PERMISSION,
            );

            client.close();
            done();
          });
      }));
  });
});

describe("Lookup APIs", () => {
  let token: string;

  beforeEach(
    () =>
      new Promise<void>((done) => {
        token = generateTestToken("v1-lookup");
        const client = NewClient(
          token,
          "localhost:50051",
          ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
        );

        const request = WriteSchemaRequest.create({
          schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });

        const resource = ObjectReference.create({
          objectType: "test/document",
          objectId: "somedocument",
        });

        const writeRequest = WriteRelationshipsRequest.create({
          updates: [
            RelationshipUpdate.create({
              relationship: Relationship.create({
                resource: resource,
                relation: "viewer",
                subject: SubjectReference.create({
                  object: ObjectReference.create({
                    objectType: "test/user",
                    objectId: "someuser",
                  }),
                }),
              }),
              operation: RelationshipUpdate_Operation.CREATE,
            }),
            RelationshipUpdate.create({
              relationship: Relationship.create({
                resource: resource,
                relation: "viewer",
                subject: SubjectReference.create({
                  object: ObjectReference.create({
                    objectType: "test/user",
                    objectId: "someuser2",
                  }),
                }),
              }),
              operation: RelationshipUpdate_Operation.CREATE,
            }),
          ],
        });

        client.writeSchema(request, function (err) {
          expect(err).toBe(null);

          client.writeRelationships(writeRequest, function (err) {
            expect(err).toBe(null);
            done();
          });
        });
      }),
  );

  it("can lookup subjects", () =>
    new Promise<void>((done, fail) => {
      const client = NewClient(
        token,
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const request = LookupSubjectsRequest.create({
        resource: ObjectReference.create({
          objectType: "test/document",
          objectId: "somedocument",
        }),
        permission: "view",
        subjectObjectType: "test/user",
        consistency: Consistency.create({
          requirement: {
            oneofKind: "fullyConsistent",
            fullyConsistent: true,
          },
        }),
      });

      const resStream = client.lookupSubjects(request);

      resStream.on("data", function (subject: LookupSubjectsResponse) {
        expect(["someuser", "someuser2"]).toContain(
          subject.subject?.subjectObjectId,
        );
      });

      resStream.on("end", function () {
        client.close();
        done();
      });

      resStream.on("error", function (e) {
        client.close();
        fail(e);
      });

      resStream.on("status", function (status) {
        expect(status.code).toEqual(grpc.status.OK);
      });
    }));

  it("can lookup resources", () =>
    new Promise<void>((done, fail) => {
      const client = NewClient(
        token,
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const request = LookupResourcesRequest.create({
        subject: SubjectReference.create({
          object: ObjectReference.create({
            objectType: "test/user",
            objectId: "someuser",
          }),
        }),
        permission: "view",
        resourceObjectType: "test/document",
        consistency: Consistency.create({
          requirement: {
            oneofKind: "fullyConsistent",
            fullyConsistent: true,
          },
        }),
      });

      const resStream = client.lookupResources(request);

      resStream.on("data", function (response: LookupResourcesResponse) {
        expect(response.resourceObjectId).toEqual("somedocument");
      });

      resStream.on("end", function () {
        client.close();
        done();
      });

      resStream.on("error", function (e) {
        client.close();
        fail(e);
      });

      resStream.on("status", function (status) {
        expect(status.code).toEqual(grpc.status.OK);
      });
    }));
});

describe("a check with a negative timeout", () => {
  it("should fail immediately", () =>
    new Promise<void>((done) => {
      const resource = ObjectReference.create({
        objectType: "test/somenamespace",
        objectId: "bar",
      });

      const testUser = ObjectReference.create({
        objectType: "test/user",
        objectId: "someuser",
      });

      const checkPermissionRequest = CheckPermissionRequest.create({
        resource,
        permission: "someperm",
        subject: SubjectReference.create({
          object: testUser,
        }),
      });

      const client = NewClient(
        generateTestToken("v1-test-unknown"),
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
        PreconnectServices.NONE,
        {
          interceptors: [deadlineInterceptor(-100)],
        },
      );
      client.checkPermission(checkPermissionRequest, function (err, response) {
        expect(response).toBe(undefined);
        expect(err?.code).toBe(grpc.status.DEADLINE_EXCEEDED);
        client.close();
        done();
      });
    }));
});

describe("Experimental Service", () => {
  let token: string;

  beforeEach(
    () =>
      new Promise<void>((done) => {
        token = generateTestToken("v1-experimental-service");
        const client = NewClient(
          token,
          "localhost:50051",
          ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
        );

        const request = WriteSchemaRequest.create({
          schema: `definition test/user {}

      definition test/document {
        relation viewer: test/user
        permission view = viewer
      }
      `,
        });

        client.writeSchema(request, function (err) {
          expect(err).toBe(null);
          client.close();
          done();
        });
      }),
  );

  it("can bulk import relationships", () =>
    new Promise<void>((done, fail) => {
      const client = NewClient(
        token,
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const writeStream = client.bulkImportRelationships((err, value) => {
        if (err) {
          fail(err);
        }

        expect(value?.numLoaded).toEqual("2");
        client.close();
        done();
      });

      writeStream.on("error", (e) => {
        fail(e);
      });

      const resource = ObjectReference.create({
        objectType: "test/document",
        objectId: "somedocument",
      });

      writeStream.write(
        BulkImportRelationshipsRequest.create({
          relationships: [
            Relationship.create({
              resource: resource,
              relation: "viewer",
              subject: SubjectReference.create({
                object: ObjectReference.create({
                  objectType: "test/user",
                  objectId: "someuser",
                }),
              }),
            }),
            Relationship.create({
              resource: resource,
              relation: "viewer",
              subject: SubjectReference.create({
                object: ObjectReference.create({
                  objectType: "test/user",
                  objectId: "someuser2",
                }),
              }),
            }),
          ],
        }),
      );

      writeStream.end();
    }));

  it("can bulk export relationships", () =>
    new Promise<void>((done, fail) => {
      const client = NewClient(
        token,
        "localhost:50051",
        ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
      );

      const resource = ObjectReference.create({
        objectType: "test/document",
        objectId: "somedocument",
      });

      const writeRequest = WriteRelationshipsRequest.create({
        updates: [
          RelationshipUpdate.create({
            relationship: Relationship.create({
              resource: resource,
              relation: "viewer",
              subject: SubjectReference.create({
                object: ObjectReference.create({
                  objectType: "test/user",
                  objectId: "someuser",
                }),
              }),
            }),
            operation: RelationshipUpdate_Operation.CREATE,
          }),
          RelationshipUpdate.create({
            relationship: Relationship.create({
              resource: resource,
              relation: "viewer",
              subject: SubjectReference.create({
                object: ObjectReference.create({
                  objectType: "test/user",
                  objectId: "someuser2",
                }),
              }),
            }),
            operation: RelationshipUpdate_Operation.CREATE,
          }),
        ],
      });

      client.writeRelationships(writeRequest, function (err) {
        expect(err).toBe(null);

        const resStream = client.bulkExportRelationships(
          BulkExportRelationshipsRequest.create({
            consistency: Consistency.create({
              requirement: {
                oneofKind: "fullyConsistent",
                fullyConsistent: true,
              },
            }),
          }),
        );

        resStream.on(
          "data",
          function (response: BulkExportRelationshipsResponse) {
            expect(response.relationships).toEqual([
              {
                relation: "viewer",
                resource: {
                  objectType: "test/document",
                  objectId: "somedocument",
                },
                subject: {
                  optionalRelation: "",
                  object: { objectType: "test/user", objectId: "someuser" },
                },
              },
              {
                relation: "viewer",
                resource: {
                  objectType: "test/document",
                  objectId: "somedocument",
                },
                subject: {
                  optionalRelation: "",
                  object: { objectType: "test/user", objectId: "someuser2" },
                },
              },
            ]);
          },
        );

        resStream.on("end", function () {
          client.close();
          done();
        });

        resStream.on("error", function (e) {
          client.close();
          fail(e);
        });

        resStream.on("status", function (status) {
          expect(status.code).toEqual(grpc.status.OK);
        });
      });
    }));

  describe("WriteRelationships with transaction metadata (Integration Test)", () => {
    it("should successfully write relationships with metadata and verify metadata transmission", () =>
      new Promise<void>((done, fail) => {
        const testToken = generateTestToken("v1-int-tx-metadata");
        const client = NewClient(
          testToken,
          "localhost:50051",
          ClientSecurity.INSECURE_LOCALHOST_ALLOWED,
          PreconnectServices.SCHEMA_SERVICE |
            PreconnectServices.PERMISSIONS_SERVICE,
        );

        const writeSpy = vi.spyOn(
          PermissionsServiceClient.prototype,
          "writeRelationships",
        );

        const schema = `
        definition test/user {}
        definition test/document {
          relation viewer: test/user
          permission view = viewer
        }
      `;
        const writeSchemaRequest = WriteSchemaRequest.create({ schema });

        client.writeSchema(writeSchemaRequest, (schemaErr, schemaResponse) => {
          if (schemaErr) {
            client.close();
            fail(schemaErr);
            return;
          }
          expect(schemaResponse).toBeDefined();

          const uniqueSuffix = Date.now();
          const resource = ObjectReference.create({
            objectType: "test/document",
            objectId: `doc-${uniqueSuffix}`,
          });

          const user = ObjectReference.create({
            objectType: "test/user",
            objectId: `user-${uniqueSuffix}`,
          });

          const updates = [
            RelationshipUpdate.create({
              relationship: Relationship.create({
                resource,
                relation: "viewer",
                subject: SubjectReference.create({ object: user }),
              }),
              operation: RelationshipUpdate_Operation.CREATE,
            }),
          ];

          const metadataObject = {
            transaction_id: "test-tx-123",
            other_data: "sample",
          };
          const transactionMetadata = createStructFromObject(metadataObject);

          const writeRequest = WriteRelationshipsRequest.create({
            updates,
            optionalTransactionMetadata: transactionMetadata,
          });

          client.writeRelationships(writeRequest, (err, response) => {
            if (err) {
              client.close();
              fail(err);
              return;
            }

            expect(err).toBeNull();
            expect(response).toBeDefined();
            expect(response?.writtenAt).toBeDefined();

            expect(writeSpy).toHaveBeenCalledTimes(1);

            const actualRequest = writeSpy.mock
              .calls[0][0] as WriteRelationshipsRequest;

            expect(actualRequest.updates).toEqual(updates);

            expect(actualRequest.optionalTransactionMetadata).toBeDefined();
            expect(actualRequest.optionalTransactionMetadata).toEqual(
              transactionMetadata,
            );

            const transactionIdField =
              actualRequest.optionalTransactionMetadata?.fields?.[
                "transaction_id"
              ];
            expect(transactionIdField?.kind?.oneofKind).toBe("stringValue");
            if (transactionIdField?.kind?.oneofKind === "stringValue") {
              expect(transactionIdField.kind.stringValue).toBe("test-tx-123");
            }

            const otherDataField =
              actualRequest.optionalTransactionMetadata?.fields?.["other_data"];
            expect(otherDataField?.kind?.oneofKind).toBe("stringValue");
            if (otherDataField?.kind?.oneofKind === "stringValue") {
              expect(otherDataField.kind.stringValue).toBe("sample");
            }

            client.close();
            done();
          });
        });
      }));
  });
});

describe("createStructFromObject unit tests", () => {
  it("should convert a simple JS object with primitive types", () => {
    const obj = {
      stringProp: "hello",
      numberProp: 123,
      booleanProp: true,
    };
    const struct = createStructFromObject(obj);
    expect(struct.fields.stringProp?.kind.oneofKind).toBe("stringValue");
    expect(
      struct.fields.stringProp?.kind.oneofKind === "stringValue" &&
        struct.fields.stringProp?.kind.stringValue,
    ).toBe("hello");
    expect(struct.fields.numberProp?.kind.oneofKind).toBe("numberValue");
    expect(
      struct.fields.numberProp?.kind.oneofKind === "numberValue" &&
        struct.fields.numberProp?.kind.numberValue,
    ).toBe(123);
    expect(struct.fields.booleanProp?.kind.oneofKind).toBe("boolValue");
    expect(
      struct.fields.booleanProp?.kind.oneofKind === "boolValue" &&
        struct.fields.booleanProp?.kind.boolValue,
    ).toBe(true);
  });

  it("should convert a JS object with null values", () => {
    const obj = {
      nullProp: null,
    };
    const struct = createStructFromObject(obj);
    expect(struct.fields.nullProp?.kind.oneofKind).toBe("nullValue");
    expect(
      struct.fields.nullProp?.kind.oneofKind === "nullValue" &&
        struct.fields.nullProp?.kind.nullValue,
    ).toBe(PbNullValue.NULL_VALUE);
  });

  it("should convert a JS object with nested objects", () => {
    const obj = {
      nestedProp: {
        innerString: "world",
        innerNumber: 456,
      },
    };
    const struct = createStructFromObject(obj);
    const nestedStruct =
      struct.fields.nestedProp?.kind.oneofKind === "structValue" &&
      struct.fields.nestedProp.kind.structValue;
    expect(nestedStruct).toBeTruthy();
    if (nestedStruct) {
      expect(nestedStruct.fields.innerString?.kind.oneofKind).toBe(
        "stringValue",
      );
      expect(
        nestedStruct.fields.innerString?.kind.oneofKind === "stringValue" &&
          nestedStruct.fields.innerString?.kind.stringValue,
      ).toBe("world");
      expect(nestedStruct.fields.innerNumber?.kind.oneofKind).toBe(
        "numberValue",
      );
      expect(
        nestedStruct.fields.innerNumber?.kind.oneofKind === "numberValue" &&
          nestedStruct.fields.innerNumber?.kind.numberValue,
      ).toBe(456);
    }
  });

  it("should convert an empty JS object to an empty Struct", () => {
    const obj = {};
    const struct = createStructFromObject(obj);
    expect(Object.keys(struct.fields).length).toBe(0);
  });

  it("should throw an error for null input", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => createStructFromObject(null as any)).toThrow(
      "Input data for createStructFromObject must be a non-null object.",
    );
  });

  it("should throw an error for non-object input (string)", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => createStructFromObject("not an object" as any)).toThrow(
      "Input data for createStructFromObject must be a non-null object.",
    );
  });

  it("should throw an error for non-object input (number)", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => createStructFromObject(123 as any)).toThrow(
      "Input data for createStructFromObject must be a non-null object.",
    );
  });

  it("should throw an error for array input", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => createStructFromObject([] as any)).toThrow(
      "Input data for createStructFromObject must be a non-null object.",
    );
  });
});

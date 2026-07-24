import { v1 } from "@authzed/authzed-node";
// set up it on localhost like this:
// const client = v1.NewClient('mytokenhere', 'localhost:50051', v1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
const client = v1.NewClient("mytokenhere");

// Each callback-style method on the client has a promise-style equivalent
// available at the `.promises` property.
const { promises: promiseClient } = client;

try {
  const writeRequest = v1.WriteSchemaRequest.create({
    schema: `definition test/user {}

    definition test/document {
      relation viewer: test/user
      permission view = viewer
    }
    `,
  });

  // Write a schema.
  await promiseClient.writeSchema(writeRequest);

  // Write a relationship.
  const writeRelationshipRequest = v1.WriteRelationshipsRequest.create({
    updates: [
      v1.RelationshipUpdate.create({
        relationship: v1.Relationship.create({
          resource: v1.ObjectReference.create({
            objectType: "test/document",
            objectId: "somedocument",
          }),
          relation: "viewer",
          subject: v1.SubjectReference.create({
            object: v1.ObjectReference.create({
              objectType: "test/user",
              objectId: "fred",
            }),
          }),
        }),
        operation: v1.RelationshipUpdate_Operation.CREATE,
      }),
    ],
  });

  await promiseClient.writeRelationships(writeRelationshipRequest);

  // Check a permission.
  const checkPermissionRequest = v1.CheckPermissionRequest.create({
    resource: v1.ObjectReference.create({
      objectType: "test/document",
      objectId: "somedocument",
    }),
    permission: "view",
    subject: v1.SubjectReference.create({
      object: v1.ObjectReference.create({
        objectType: "test/user",
        objectId: "fred",
      }),
    }),
    consistency: v1.Consistency.create({
      requirement: {
        oneofKind: "fullyConsistent",
        fullyConsistent: true,
      },
    }),
  });

  const checkResult = await promiseClient.checkPermission(checkPermissionRequest);

  console.log(
    checkResult.permissionship === v1.CheckPermissionResponse_Permissionship.HAS_PERMISSION,
  );

  // Lookup Resources
  // For stream-returning methods, the promise-style method resolves to an array
  // of response objects once the stream has been closed.

  const lookupResourcesRequest = v1.LookupResourcesRequest.create({
    consistency: v1.Consistency.create({
      requirement: {
        oneofKind: "fullyConsistent",
        fullyConsistent: true,
      },
    }),
    resourceObjectType: "test/document",
    permission: "view",
    subject: v1.SubjectReference.create({
      object: v1.ObjectReference.create({
        objectType: "test/user",
        objectId: "fred",
      }),
    }),
  });

  const results = await promiseClient.lookupResources(lookupResourcesRequest);

  console.log(results);
} finally {
  // Close the client so the underlying gRPC channel is released and the process
  // can exit.
  client.close();
}

import { v1 } from "@authzed/authzed-node";
// set up it on localhost like this:
// const client = v1.NewClient('mytokenhere', 'localhost:50051', v1.ClientSecurity.INSECURE_LOCALHOST_ALLOWED);
const client = v1.NewClient("mytokenhere");
const { promises: promiseClient } = client; // access client.promises after instantiating client

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

// Read all relationships for a resource type, optionally filtered by relation
// and/or a specific resource ID. ReadRelationships is a server-streaming RPC;
// the promise client buffers the stream and returns all results as an array.
const readRelationshipsRequest = v1.ReadRelationshipsRequest.create({
  consistency: v1.Consistency.create({
    requirement: {
      oneofKind: "fullyConsistent",
      fullyConsistent: true,
    },
  }),
  relationshipFilter: v1.RelationshipFilter.create({
    resourceType: "test/document",
    optionalResourceId: "somedocument",
    optionalRelation: "viewer",
  }),
});

const readRelationshipsResult = await promiseClient.readRelationships(readRelationshipsRequest);

console.log(readRelationshipsResult);

// Delete relationships matching a filter. Note that DeleteRelationships takes
// a RelationshipFilter, not a Relationship — to delete a single specific
// relationship, fill in resourceType, optionalResourceId, optionalRelation,
// and optionalSubjectFilter so the filter matches exactly one row.
const deleteRelationshipsRequest = v1.DeleteRelationshipsRequest.create({
  relationshipFilter: v1.RelationshipFilter.create({
    resourceType: "test/document",
    optionalResourceId: "somedocument",
    optionalRelation: "viewer",
    optionalSubjectFilter: v1.SubjectFilter.create({
      subjectType: "test/user",
      optionalSubjectId: "fred",
    }),
  }),
});

const deleteRelationshipsResult = await promiseClient.deleteRelationships(
  deleteRelationshipsRequest,
);

console.log(deleteRelationshipsResult);

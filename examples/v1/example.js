import { v1 } from '@authzed/authzed-node';
const { promises: promiseClient } = client; // access client.promises
// set up it on localhost like this:
// const client = v1.NewClient('mytokenhere', 'localhost:50051', 1);
const client = v1.NewClient('mytokenhere');

const writeRequest = v1.WriteSchemaRequest.create({
  schema: `definition test/user {}

  definition test/document {
    relation viewer: test/user
    permission view = viewer
  }
  `,
});

// Write a schema.
await new Promise((resolve, reject) => {
  client.writeSchema(writeRequest, function (err, response) {
    if (err) reject(err);
    resolve(response);
  });
});

// Write a relationship.
const writeRelationshipRequest = v1.WriteRelationshipsRequest.create({
  updates: [
    v1.RelationshipUpdate.create({
      relationship: v1.Relationship.create({
        resource: v1.ObjectReference.create({
          objectType: 'test/document',
          objectId: 'somedocument',
        }),
        relation: 'viewer',
        subject: v1.SubjectReference.create({
          object: v1.ObjectReference.create({
            objectType: 'test/user',
            objectId: 'fred',
          }),
        }),
      }),
      operation: v1.RelationshipUpdate_Operation.CREATE,
    }),
  ],
});

await new Promise((resolve, reject) => {
  client.writeRelationships(writeRelationshipRequest, function (err, response) {
    if (err) reject(err);
    resolve(response);
  });
});

// Check a permission.
const checkPermissionRequest = v1.CheckPermissionRequest.create({
  resource: v1.ObjectReference.create({
    objectType: 'test/document',
    objectId: 'somedocument',
  }),
  permission: 'view',
  subject: v1.SubjectReference.create({
    object: v1.ObjectReference.create({
      objectType: 'test/user',
      objectId: 'fred',
    }),
  }),
  consistency: v1.Consistency.create({
    requirement: {
      oneofKind: 'fullyConsistent',
      fullyConsistent: true,
    },
  }),
});

const checkResult = await new Promise((resolve, reject) => {
  client.checkPermission(checkPermissionRequest, function (err, response) {
    if (err) reject(err);
    resolve(response);
  });
});

console.log(
  checkResult.permissionship ===
    v1.CheckPermissionResponse_Permissionship.HAS_PERMISSION
);

// Lookup Resources

const lookupResourcesRequest = v1.LookupResourcesRequest.create({
  consistency: v1.Consistency.create({
    requirement: {
      oneofKind: 'fullyConsistent', 
      fullyConsistent: true,
    },
  }),
  resourceObjectType: 'test/document', 
  permission: 'view', 
  subject: v1.SubjectReference.create({
    object: v1.ObjectReference.create({
      objectType: 'test/user', 
      objectId: 'fred', 
    }),
  }),
});

const results = await promiseClient.lookupResources(lookupResourcesRequest)

console.log(results);

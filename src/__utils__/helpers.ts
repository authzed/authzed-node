import {
    ClientSecurity,
    NewClient,
    ZedClientInterface,
    RelationshipUpdate_Operation,
} from '../v1.js'

/**
 * Generates a random token to support unique, idempotent local testing.
 */
export function generateTestToken(): string {
  return Math.random().toString()
}

/*
 * Asserts that a value or expression is non-falsey.
 * It's mostly useful to use a statement to narrow a type
 * (as opposed to using an if statement, which is annoying
 * in tests)
 */
export function assert(val: unknown, msg = "Assertion failed"): asserts val {
  if(!val) throw new Error(msg);
}

export const testClient = () => NewClient(
      generateTestToken(),
      'localhost:50051',
      ClientSecurity.INSECURE_LOCALHOST_ALLOWED
    )

const testSchema = `
caveat likes_harry_potter(likes bool) {
  likes == true
}

definition post {
    relation writer: user
    relation reader: user
    relation caveated_reader: user with likes_harry_potter

    permission write = writer
    permission view = reader + writer
    permission view_as_fan = caveated_reader + writer
}
definition user {}
`

export const writeTestSchema = async (client: ZedClientInterface) => {
    await client.promises.writeSchema({
        schema: testSchema
    })
}

export const writeTestTuples = async (client: ZedClientInterface) => {
    const emilia = {
        object: {
            objectType: "user",
            objectId: "emilia"
        },
        optionalRelation: "",
    }
    const beatrice = {
        object: {
            objectType: "user",
            objectId: "beatrice"
        },
        optionalRelation: "",
    }
    const postOne = {
        objectType: "post",
        objectId: "post-one"
    }
    const postTwo = {
        objectType: "post",
        objectId: "post-two"
    }
    await client.promises.writeRelationships({
        // NOTE: optionalPreconditions seems like it should be omittable,
        // but the way that the typescript plugin handles repeated fields
        // is to treat them as required.
        optionalPreconditions: [],
        updates: [
            {
                operation: RelationshipUpdate_Operation.CREATE,
                relationship: {
                    subject: emilia,
                    relation: "writer",
                    resource: postOne,
                }
            },
            {
                operation: RelationshipUpdate_Operation.CREATE,
                relationship: {
                    subject: emilia,
                    relation: "writer",
                    resource: postTwo,
                }
            },
            {
                operation: RelationshipUpdate_Operation.CREATE,
                relationship: {
                    subject: beatrice,
                    relation: "reader",
                    resource: postOne,
                }
            },
            {
                operation: RelationshipUpdate_Operation.CREATE,
                relationship: {
                    subject: beatrice,
                    relation: "caveated_reader",
                    resource: postOne,
                    optionalCaveat: { caveatName: "likes_harry_potter" }
                }
            },
        ]
    })
    return { emilia, beatrice, postOne, postTwo };
}

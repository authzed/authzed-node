"use strict";

import { SchemaServiceClient } from "./authzedapi/authzed/api/v1alpha1/schema.grpc-client";
import util from "./util";

function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  insecure = false
) {
  const creds = util.createClientCreds(token, insecure);
  const schema = new SchemaServiceClient(endpoint, creds);
  return schema;
}

export * from "./authzedapi/authzed/api/v1alpha1/schema";

export { NewClient };
export default {
  NewClient,
};

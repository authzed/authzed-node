"use strict";

import { SchemaServiceClient } from "./authzedapi/authzed/api/v1alpha1/schema.grpc-client";
import util, { ClientSecurity } from "./util";

function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  security: ClientSecurity = ClientSecurity.SECURE
) {
  const creds = util.createClientCreds(endpoint, token, security);
  const schema = new SchemaServiceClient(endpoint, creds);
  return schema;
}

export * from "./authzedapi/authzed/api/v1alpha1/schema";

export { NewClient };
export default {
  NewClient,
};

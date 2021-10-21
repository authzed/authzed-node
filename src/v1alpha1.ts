"use strict";

import schemasvc from "./authzedapi/authzed/api/v1alpha1/schema_grpc_pb";
import schemapb from "./authzedapi/authzed/api/v1alpha1/schema_pb";
import util from "./util";

function NewClient(
  token: string,
  endpoint = util.authzedEndpoint,
  insecure = false
) {
  const creds = util.createClientCreds(token, insecure);
  const schema = new schemasvc.SchemaServiceClient(endpoint, creds);
  return schema;
}

export { NewClient };
export default {
  ...schemapb,
};

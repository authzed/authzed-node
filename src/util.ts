import * as grpc from "@grpc/grpc-js";

function createClientCreds(
  token: string,
  insecure = false
): grpc.ChannelCredentials {
  const metadata = new grpc.Metadata();
  metadata.set("authorization", "Bearer " + token);

  const creds = [];
  if (!insecure) {
    creds.push(
      grpc.credentials.createFromMetadataGenerator((_, callback) => {
        callback(null, metadata);
      })
    );
  }

  return grpc.credentials.combineChannelCredentials(
    insecure ? grpc.credentials.createInsecure() : grpc.credentials.createSsl(),
    ...creds
  );
}

const authzedEndpoint = "grpc.authzed.com:443";

export { createClientCreds, authzedEndpoint };
export default { createClientCreds, authzedEndpoint };

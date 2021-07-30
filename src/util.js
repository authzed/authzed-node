const grpc = require('@grpc/grpc-js');

function createClientCreds(token, insecure = false) {
    const metadata = new grpc.Metadata();
    metadata.set('authorization', 'Bearer ' + token);

    const creds = [];
    if (!insecure) {
        creds.push(grpc.credentials.createFromMetadataGenerator((_, callback) => {
            callback(null, metadata)
        }))
    }

    return grpc.credentials.combineChannelCredentials(
        insecure ? grpc.credentials.createInsecure() : grpc.credentials.createSsl(),
        ...creds
    );
}

const authzedEndpoint = "grpc.authzed.com:443";

module.exports = {
    createClientCreds: createClientCreds,
    authzedEndpoint: authzedEndpoint,
};

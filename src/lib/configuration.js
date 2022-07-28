let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');
let PROTO_PATH = './proto/calculator.proto';

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

let PORT = '0.0.0.0:50051';
let calculator = grpc.loadPackageDefinition(packageDefinition).calculator;

module.exports = {
    packageDefinition,
    calculator,
    grpc,
    PORT
}
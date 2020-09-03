//lib grpc
const grpc = require('grpc')
//path protofile
const PROTO_PATH = 'protobuff/product.proto'
//load service from product.proto/ protobuff file
const ProductService = grpc.load(PROTO_PATH).ProductService
//setup client 
const client = new ProductService('127.0.0.1:6061',
    grpc.credentials.createInsecure())


module.exports = client
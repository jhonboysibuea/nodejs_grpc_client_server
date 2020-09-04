const grpc = require('grpc')
const product = grpc.load('protobuff/product.proto')
const server = new grpc.Server()
server.bind('127.0.0.1:6061', grpc.ServerCredentials.createInsecure())
server.addService(product.ProductService.service, {
    getProductDetail: (call, callback) => {
        let product = call.request

        console.log("product id " + product.product_id)
        productResponse = {};
        productObj = {};
        if (product.product_id == "1") {
            productObj.product_id = product.product_id
            productObj.product_name = "omjebs"

            productResponse.message = "success"
            productResponse.status = "1000"
            productResponse.data = productObj;
        } else {
            productResponse.message = "failed"
            productResponse.status = "1001"
            productResponse.data = null;
        }
        callback(null, productResponse)
    },
})
console.log('Server running at 127.0.0.1:6061')
server.start()
const client = require('./client')

//look protobuff file what request parameter
let productDetailRequest = {
    product_id: "1"
}

//call method 
client.getProductDetail(productDetailRequest, (error, productDetailResponse) => {
    if (!error) {
        console.log('successfully fetch product detail')
        console.log(productDetailResponse)
    } else {
        console.error(error)
    }
})
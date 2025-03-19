const mongoose = require('mongoose')

const cartSchema =new mongoose.Schema({
    UserId:String,
    items:[
        {
            productId:String,
            // quantity:Number,
            name:String,
            price:String
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema)



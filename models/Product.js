const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Mystore')
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => {
    console.log(err)
})

const productSchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    ProductDescription: {
       type: String,
       required: true
    },
    Rating: {
        type:Number
    },
    Price: {
        type: Number
    },
    Discount: {
        type: String
    },
    img: {
        url: {
            type:String
        }
    }
});

let Product = mongoose.model("Product", productSchema)

module.exports = Product;
const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
   name : {
    type:String,
    required: [true,'Please enter the product'],
    trim:true,
    maxLength:[100,'Product name cannot exceed 100 chracter']
    
   },

   price : {
    type:Number,
    required: [true,'Please enter the product'],
    maxLength:[5,'Product name cannot exceed 100 chracter'],
    default:0.0
    
   },
   description : {
    type:String,
    required: [true,'Please enter the product'], 
   },
   rating: {
    type:Number,
    default:0
   },
   images:[
    {
        public_id:{
            type:String,
            required: true
        },
        url : {
            type:String,
            required: true
        }

    }
   ],
   category :{
    type:String,
    required:[true,'Please select category for this product'],
    enum: {
        values: [
            "Men",
            "Womens",
            "Kids",
            "Grocery",
            "Sports",
            "Accessories",
            "Jwellery",
            "Decoration",
            
        ],
        message: "Please select correct categories"
    }
   },
   seller : {
    type: String,
    required: [true,'Please Enter Product Seller']
   },
   stock: {
    type:Number,
    required: [true,'Please Enter Product Seller'],
    maxLength:[5,'Prduct name cannot exceed 5 characters'],
    default: 0
   },
   numofReviews :{
    type: Number,
    default: 0
   },

   reviews:[
    {
      name: {
        type:String,
        required:true
      },
      rating: {
        type:Number,
        required: true
      },
      comment :{
        type:String,
        required:true
      }
    }
   ],

   createdAt: {
    type:Date,
    default: Date.now
   }

})


module.exports = mongoose.model('products',productSchema)
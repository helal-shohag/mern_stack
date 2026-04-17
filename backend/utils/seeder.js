const dotenv = require('dotenv')
const connectDatabase = require('../config/database')
const Product = require('../model/product')
const products = require('../data/product.json')
const {connect} = require('mongoose')

dotenv.config({path: 'backend/config/config.env'})

connectDatabase()

const seedProducts = async () =>{
    try{
       await Product.deleteMany();
       console.log('produts are deeleted')
       await Product.insertMany();
       console.log('products are added')
       process.exit()
    }catch(error){
        console.log(error.message);
        process.exit()
    }
}

seedProducts()
const Product = require('../model/product')


//create new product => api/v1/products/new
exports.newProducts = async (req,res,next) =>{
   const product = await Product.create(req.body)

   res.status(200).json({
    success:true,
    product
   })
};

exports.getProduct = (req,res,next) => {
    res.status(200).json({
        success : true,
        message: "This Route will Shows All products"
    })
}


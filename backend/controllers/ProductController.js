const Product = require('../model/product')


//create new product => api/v1/products/new
exports.newProduct = async (req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success : true,
        product
    })

}
//get all products => api/v1/products
exports.getProduct = async(req,res,next) => {
    const products = await Product.find()
    
    res.status(200).json({
        success : true,
        products
       
    })
}

//get single products => api/v1/products/:id

exports.getSingleProduct =async (req,res,nex) =>{
   const product = await Product.findById(req.params.id);

   if(!product){
    return res.status(404).json({
        success:false,
        messege:'product not found'
    })
   }
   res.status(201).json({
    success:true,
    product
   })
}

//update single product => api/v1/products/:id

exports.updateProduct = async(req,res,next) =>{
  let product = await Product.findById(req.params.id)

  if(!product){
    return res.status(404).json({
        success:false,
        messege:'product not found'
    })
   }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.send(200).json({
        success:true,
        product
    })
}

//delete single product => api/vi/admin/product/:id

exports.deleteProduct = async (req,res,next) =>{
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
    return res.status(404).json({
        success:false,
        messege:'product not found'
    })
   }

   res.status(200).json({
    success:true,
    messege: "products is deleted"
   })

}

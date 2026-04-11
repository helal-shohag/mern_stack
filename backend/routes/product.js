const express = require('express');
const  router = express.Router();

const {getProduct,newProducts} = require('../controllers/ProductController');


router.route('/products').get(getProduct);
router.route('/product/new').post(newProducts);


module.exports = router;
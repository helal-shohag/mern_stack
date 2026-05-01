const express = require('express');


const app = express();
app.use(express.json());

// import all Route
const products = require('./routes/product');
const user = require('./routes/user');
app.use('/api/v1',products);
app.use('/api/v1',user);




module.exports = app;
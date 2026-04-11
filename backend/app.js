const express = require('express');


const app = express();
app.use(express.json());

// import all Route

const product = require('./routes/product');




module.exports = app;
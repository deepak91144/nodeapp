var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
require("dotenv").config();
require("./dbconfig");
const productModel = require("./model/product");
app.post("/products", async function (req, res, next) {
  const product = new productModel({ name: "p01", price: 2343 });
  const newProduct = await product.save();
  return res.status(201).json({
    message: "product created",
    product: newProduct,
  });
});
console.log(process.env.DBURL);
app.listen(process.env.PORT, function () {
  console.log("CORS-enabled web server listening on port 80");
});

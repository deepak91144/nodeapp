var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/products", function (req, res, next) {
  return res.status(200).json({
    id: 1,
    name: "pants",
  });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

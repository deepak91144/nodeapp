const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((info) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

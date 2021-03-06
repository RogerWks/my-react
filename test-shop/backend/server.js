const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI || "mongodb://localhost:27017/mydb";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const productsRouter = require("./routes/products");

app.use("/products", productsRouter);

app.use((req, res, next) => {
  const err = new Error("Not foud pages");
  next(err);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

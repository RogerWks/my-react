const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const productsRouter = require("./routes/products");
const typeRouter = require("./routes/type");

app.use("/products", productsRouter);
app.use("/type", typeRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

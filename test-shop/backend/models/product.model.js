const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    sku: Number,
    animal: String,
    category: String,
    title: String,
    description: String,
    price: Number,
    status: [String],
    isFreeShipping: Boolean,
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;

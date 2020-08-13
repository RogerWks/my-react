const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    sku: { type: Number },
    animal: { type: String },
    category: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    status: [String],
    isFreeShipping: { type: Boolean },
  },
  { timestamps: true, versionKey: false },
  {
    collection: "products",
  }
);

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;

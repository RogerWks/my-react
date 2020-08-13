const express = require("express");
const router = express.Router();
let Product = require("../models/product.model");

router.get("/", (req, res) => {
  const querry = req.query;
  Product.find(querry)
    .then((products) => {
      res.json({
        confirmation: "succes",
        data: products,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fall",
        message: err.message,
      });
    });
});

router.get("/cat", (req, res) => {
  Product.find({ animal: "cat" })
    .then((products) => {
      res.json({
        confirmation: "succes",
        data: products,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fall",
        message: err.message,
      });
    });
});

module.exports = router;

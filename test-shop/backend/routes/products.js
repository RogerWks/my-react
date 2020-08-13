const express = require("express");
const router = express.Router();
let Product = require("../models/product.model");

router.get("/", (req, res) => {
  const querry = req.query;
  Product.find(querry)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

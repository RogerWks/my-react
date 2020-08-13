const router = require("express").Router();
let Product = require("../models/product.model");

router.route("/animal/cat").get((req, res) => {
  Product.findOne({ animal: "cat" })
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

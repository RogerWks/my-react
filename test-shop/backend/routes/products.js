module.exports = (app) => {
  const router = require("express").Router();
  let Product = require("../models/product.model");

  router.route("/").get((req, res) => {
    Product.find()
      .then((products) => res.json(products))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  router.get("/:animal", Product.findOne);

  app.use("products", router);
};

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//index route
router.get("/feed", async (req, res) => {
  let allProducts = await Product.find({});
  res.render("products/index", { allProducts });
});

router.get("/feed/new", (req, res) => {
  res.render("products/new");
});

//show route
router.get("/feed/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const viewProduct = await Product.findById(id);

    if (!viewProduct) {
      return res.status(404).send("Product not found");
    }
    res.render("products/show", { viewProduct });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// create route
router.post("/feed", async (req, res) => {
  const { ProductName, ProductDescription, Rating, Price, Discount, img } =
    req.body;
  const newProduct = new Product({
    ProductName: ProductName,
    ProductDescription: ProductDescription,
    Rating: Rating,
    Price: Price,
    Discount: Discount,
    img: {
      url: img.url,
    },
  });

  await newProduct.save();
  res.redirect("/mystore/feed");
});

module.exports = router;

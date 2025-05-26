const express = require("express");
const {
  getShoes,
  getShoeById,
  createShoe,
  getShoesByCategory,
} = require("../controllers/shoeController");

const router = express.Router();

router.get("/", getShoes);
router.get("/:id", getShoeById);
router.post("/", createShoe);
router.get("/category/:categoryId", getShoesByCategory);

module.exports = router;

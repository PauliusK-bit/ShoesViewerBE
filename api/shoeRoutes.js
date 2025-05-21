const express = require("express");
const {
  getShoes,
  getShoeById,
  createShoe,
} = require("../controllers/shoeController");

const router = express.Router();

router.get("/", getShoes);
router.get("/:id", getShoeById);
router.post("/", createShoe);

module.exports = router;

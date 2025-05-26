const express = require("express");
const {
  getCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);

module.exports = router;

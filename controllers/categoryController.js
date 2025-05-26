const Category = require("../models/categoryModel");
const Shoe = require("../models/shoeModel");

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).send({ error: "Category Not found" });
    }

    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).send({ error: "Category Not found" });
    }

    res.send({ message: "Category was removed", data: deletedCategory });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
};

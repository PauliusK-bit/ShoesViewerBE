const Shoe = require("../models/shoeModel");

const createShoe = async (req, res) => {
  try {
    const shoe = new Shoe(req.body);
    await shoe.save();
    res.send(shoe);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.send(shoes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getShoeById = async (req, res) => {
  try {
    const { id } = req.params;
    const shoe = await Shoe.findById(id);

    if (!shoe) {
      return res.status(404).send({ error: "Shoe Not found" });
    }

    res.send(shoe);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getShoesByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const shoes = await Shoe.find({ categoryId: categoryId });

    if (!shoes || shoes.length === 0) {
      return res
        .status(404)
        .send({ message: "No shoes found for this category" });
    }

    res.send(shoes);
  } catch (error) {
    console.error("Error fetching shoes by category:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createShoe,
  getShoes,
  getShoeById,
  getShoesByCategory,
};

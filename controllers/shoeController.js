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

module.exports = {
  createShoe,
  getShoes,
  getShoeById,
};

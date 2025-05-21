const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

const Shoe = mongoose.model("Shoes", shoeSchema);

module.exports = Shoe;

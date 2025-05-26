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
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;

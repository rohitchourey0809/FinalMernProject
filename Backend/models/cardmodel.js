const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const shoppingcardschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Shopping = mongoose.model("shopping", shoppingcardschema);

module.exports = Shopping;

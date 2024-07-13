const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, },
    imageUrl: { type: String, required: true },
    averageRating: { type: Number },
    price: { type: Number, required: true },
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);


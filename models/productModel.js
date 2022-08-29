const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Product must have a name"],
      unique: true,
    },
    description: String,
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    discount: {
      type: Number,
      discount_percentage: 0,
      default: 0,
    },
    imageSrc: {
      type: String,
      required: [true, "Product image is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    createdBy: {
      type: Number,
      required: [true, "Created by is required."],
    },
    modifiedBy: {
      type: Number,
      required: [true, "Modified by is required."],
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const mongoose = required("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required."],
    },
    email: {
      type: String,
      required: [true, "Email field is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password field is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = Product;

const express = require("express");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

//Routes
// app.use("/", (req, res) => {
//   res.status(200).json({
//     page: "homepage",
//   });
// });

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

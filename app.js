const express = require("express");

const app = express();
app.use(express.json());

const getAllProducts = (req, res) => {
  res.status(200).send("Fetching all products");
};

const createNewProduct = (req, res) => {
  console.log(req.body);
  res.status(200).send("Post completed");
};

const updateProduct = (req, res) => {
	console.log(req.body);
  res.status(200).send("Update completed");
};

const deleteProduct = (req, res) => {
  res.status(204).send("Delete completed");
};

app.route("/api/v1/products").get(getAllProducts).post(createNewProduct);
app.route("/api/v1/product/:id").patch(updateProduct).delete(deleteProduct);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

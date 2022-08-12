exports.getProducts = (req, res) => {
  res.status(200).send("Fetching all products");
};

exports.createNewProduct = (req, res) => {
  res.status(200).send("Post completed");
};

exports.updateProduct = (req, res) => {
  res.status(200).send("Update completed");
};

exports.deleteProduct = (req, res) => {
  res.status(204).send("Delete completed");
};

exports.validate = (req, res, next) => {
  if (!(req.body && req.body.name)) {
    return res.status(400).json({
      error: "Invalid data",
    });
  }

  next();
};

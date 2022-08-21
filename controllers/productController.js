const Product = require("./../models/productModel");
const APIFeatures = require("./../utils/apiFeatures");

exports.getProducts = async (req, res) => {
  try {
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate();

    const products = await features.query;

    res.status(200).json({
      data: {
        products: products,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: "Fail",
      message: err,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: "Fail",
      message: error,
    });
  }
};

exports.createNewProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: "Fail",
      message: err,
    });
  }
};

exports.updateProduct = (req, res) => {
  res.status(200).send("Update completed");
};

exports.deleteProduct = (req, res) => {
  res.status(204).send("Delete completed");
};

//Valdiation
exports.validate = (req, res, next) => {
  if (!(req.body && req.body.name)) {
    return res.status(400).json({
      error: "Invalid data",
    });
  }

  next();
};

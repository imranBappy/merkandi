const ProductGroup = require("../models/productGroup");

exports.createProductGroup = async (req, res, next) => {
  try {
    const productGroup = await ProductGroup.create(req.body);
    res.status(201).json(productGroup);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getProductsGroup = async (req, res, next) => {
  try {
    let { page, limit = 10 } = req.query;
    limit = parseInt(limit);
    const currentPage = parseInt(page) || 1;

    const productGroup = await ProductGroup.find({})
      .select("-createdAt -updatedAt -__v")
      .skip(limit * currentPage - limit)
      .limit(limit);

    const total = await ProductGroup.countDocuments();

    res.json({
      total: total,
      productGroups: productGroup,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductGroup = async (req, res, next) => {
  try {
    const productGroup = await ProductGroup.findById(req.params.id);
    res.json(productGroup);
  } catch (error) {
    next(error);
  }
};

exports.updateProductGroup = async (req, res, next) => {
  try {
    const updatedProductGroup = await ProductGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedProductGroup) {
      return res
        .status(404)
        .json({ success: false, message: "Product Group not found" });
    }
    res.status(200).json(updatedProductGroup);
  } catch (error) {
    next(error);
  }
};

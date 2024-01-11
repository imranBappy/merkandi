const Category = require("../models/Category");

exports.getCategories = async (req, res, next) => {
  try {
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    const PER_PAGE = 10;
    const categories = await Category.find({})
      .populate({
        path: "image",
        select: "name url",
      })
      .populate({
        path: "subcategory",
        select: "name",
        populate: {
          path: "image",
          select: "name url",
        },
      })
      .skip(PER_PAGE * currentPage - PER_PAGE)
      .limit(PER_PAGE);

    const total = await Category.countDocuments();
    res.status(200).json({ total: total, categories: categories });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id)
      .populate({
        path: "image",
        select: "name url",
      })
      .populate({
        path: "subcategory",
        select: "name",
        populate: {
          path: "image",
          select: "name url",
        },
      });
    if (!category) {
      return next("Category not found");
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    next(error);
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    await category.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

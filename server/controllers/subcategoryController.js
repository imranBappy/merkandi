const Categories = require("../models/Category");
const SubSubcategory = require("../models/Subcategories");

exports.getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await SubSubcategory.find()
      .populate({
        path: "image",
        select: "name url",
      })
      .populate({
        path: "category",
        select: "name",
      });

    res.status(200).json({ success: true, data: subcategories });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getSubcategory = async (req, res, next) => {
  try {
    const subcategory = await SubSubcategory.findById(req.params.id);
    if (!subcategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }
    res.status(200).json({ success: true, data: subcategory });
  } catch (error) {
    next(error);
  }
};
exports.createSubcategory = async (req, res, next) => {
  try {
    const subcategory = await SubSubcategory.create(req.body);
    await Categories.findByIdAndUpdate(
      req.body.category,
      {
        $push: {
          subcategory: subcategory._id,
        },
      },
      { new: true }
    );
    res.status(201).json({ success: true, data: subcategory });
  } catch (error) {
    next(error);
  }
};
exports.updateSubcategory = async (req, res, next) => {
  try {
    const subcategory = await SubSubcategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!subcategory) {
      return res
        .status(404)
        .json({ success: false, message: "Subcategory not found" });
    }

    res.status(200).json({ success: true, data: subcategory });
  } catch (error) {
    next(error);
  }
};
exports.deleteSubcategory = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

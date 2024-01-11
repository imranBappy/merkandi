const Page = require("../models/Page");

exports.getPages = async (req, res, next) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const pages = await Page.find({})
      .skip(limit * page - limit)
      .limit(limit);
    const total = await Page.countDocuments();
    res.status(200).json({
      total: total,
      pages: pages,
    });
  } catch (error) {
    next(error);
  }
};
exports.getPage = async (req, res, next) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    res.status(200).json(page);
  } catch (error) {
    next(error);
  }
};
exports.createPage = async (req, res, next) => {
  try {
    const page = await Page.create(req.body);
    res.status(201).json(page);
  } catch (error) {
    next(error);
  }
};
exports.updatePage = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const updatedPage = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      { title, content },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedPage);
  } catch (error) {
    next(error);
  }
};
exports.deletePage = async (req, res, next) => {
  try {
    const page = await Page.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json(page);
  } catch (error) {
    next(error);
  }
};

const Click = require("../models/Click");
const Product = require("../models/Product");

exports.getClicks = async (req, res, next) => {
  try {
    const {
      page,
      limit,
      type,
      isCustomare = false,
      wholesale = false,
    } = req.query;
    const currentPage = parseInt(page) || 1;
    const perPage = parseInt(limit) || 10;

    const filterObj = {
      ...(type && { type }),
      ...(isCustomare ? { customare: req.user } : { author: req.user }),
      ...{
        product: {
          $in: await Product.find({ wholesale: !!wholesale }),
        },
      },
    };

    const clicks = await Click.find(filterObj)
      .populate("customare")
      .populate("product")
      .skip(perPage * currentPage - perPage)
      .limit(perPage);

    const total = await Click.countDocuments(filterObj);
    res.status(200).json({
      clicks,
      total,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

exports.createClick = async (req, res, next) => {
  try {
    const { type, product } = req.body;

    const authorProduct = await Product.findById(product);

    if (!authorProduct) {
      return next("Product not found");
    }
    const id = String(authorProduct.user);
    if (id === req.user) {
      return next("You can't click your own product");
    }

    const click = await Click.create({
      type,
      product,
      customare: req.user,
      author: authorProduct.user,
    });
    res.status(201).json(click);
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

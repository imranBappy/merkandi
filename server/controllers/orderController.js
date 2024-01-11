const Order = require("../models/Order");
const Product = require("../models/Product");

exports.getOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, userType = "user" } = req.query;
    const orders = await Order.find({ [userType]: req.user })
      .populate({
        path: "product",
        select: "title price image",
      })
      .populate({
        path: userType === "user" ? "owner" : "user",
        select: "name  ",
      })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const total = await Order.countDocuments({ [userType]: req.user });
    res.status(200).json({ orders, total });
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate({
        path: "product",
        select: "title price image",
      })
      .populate({
        path: "owner",
        select: "name  ",
      })
      .populate("address");

    if (!order) {
      return next("Order not found");
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const { products, address } = req.body;
    products.forEach(async (product) => {
      const prod = await Product.findById(product.product);
      if (prod.user !== req.user) {
        await Order.create({
          user: req.user,
          address,
          quantity: product.quantity,
          product: product.product,
          owner: prod.user,
        });
      }
    });
    res.status(201).json({
      message: "Order successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedOrder) {
      return next("Order not found");
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

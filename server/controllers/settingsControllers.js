const Settings = require("../models/Settings");
const mongoose = require("mongoose");

exports.getSettings = async (req, res, next) => {
  try {
    const settings = await Settings.findOne()
      .populate("logo")
      .populate("favicon")
      .populate("footerLogo");

    res.status(200).json(settings);
  } catch (error) {
    next(error);
  }
};

exports.updateSettings = async (req, res, next) => {
  const { id: _id } = req.params;
  const settings = req.body;
  console.log({ settings });
  try {
    const { _id } = await Settings.findOne();

    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No settings with that id");

    const updatedSettings = await Settings.findByIdAndUpdate(_id, settings, {
      new: true,
    });

    res.json(updatedSettings);
  } catch (error) {
    next(error);
  }
};

exports.createSettings = async (req, res, next) => {
  const settings = req.body;
  console.log(settings);
  const newSettings = new Settings(settings);
  try {
    await newSettings.save();
    res.status(201).json(newSettings);
  } catch (error) {
    next(error);
  }
};

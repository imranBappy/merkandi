// model for country
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({}, { timestamps: true });

module.exports = mongoose.model("state", StateSchema);

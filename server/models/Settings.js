const { Schema, model, Types } = require("mongoose");

const SettingsSchema = new Schema(
  {
    name: String,
    title: String,
    address: String,
    shortAddress: String,
    email: String,
    description: String,
    phoneHeader: String,
    phoneFooter: String,
    copyright: String,

    // general settings
    logo: {
      type: Types.ObjectId,
      ref: "image",
    },
    favicon: {
      type: Types.ObjectId,
      ref: "image",
    },
    footerLogo: {
      type: Types.ObjectId,
      ref: "image",
    },

    language: { type: String, default: "en" },
    seo: {
      title: String,
      description: String,
      keyword: String,
      image: Array,
    },
    social: {
      facebook: String,
      instagram: String,
      twitter: String,
      youtube: String,
      pinterest: String,
    },

    environmentVariables: {
      host: String,
      apiUrl: String,
      apiSecret: String,
      dbUrl: String,

      algoliaAppId: String,
      algoliaSearchApiKey: String,
      algoliaAdminApiKey: String,
      algoliaIndexName: String,

      stripeKey: String,
      stripeSecret: String,

      paypalClientId: String,
      paypalClientSecret: String,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = model("Settings", SettingsSchema);
module.exports = Settings;

const { Schema, model } = require("mongoose");

const conversationSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    participant: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = model("conversation", conversationSchema);

module.exports = Conversation;

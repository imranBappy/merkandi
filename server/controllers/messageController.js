const Auth = require("../models/Auth");
const Conversation = require("../models/Conversation");
const { Message } = require("../models/Message");

exports.createConversation = async (req, res, next) => {
  try {
    let { participant: participantEmail, message } = req.body;
    const participantObj = await Auth.findOne({
      email: participantEmail,
    });

    if (!participantObj) {
      return next("Participant not found!");
    }

    let participant = participantObj._id;
    const conversation = await Conversation.findOne({
      createdBy: req.user,
      participant,
    });

    if (conversation) {
      return next("Conversation already exist!");
    }
    const newConversation = await Conversation.create({
      createdBy: req.user,
      participant,
    });

    await Message.create({
      conversation: newConversation._id,
      sender: req.user,
      receiver: participant,
      message,
    });

    const findMessage = await Message.find({
      conversation: newConversation._id,
    })
      .populate("sender", "name email")
      .populate("receiver", "name email");

    const findConversation = await Conversation.findById(newConversation._id)
      .populate("createdBy", "name email")
      .populate("participant", "name email");

    global.io.emit("newConversation", {
      conversation: findConversation,
      message: findMessage,
    });

    res.json({
      conversation: findConversation,
      message: findMessage,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getConversation = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const currentPage = parseInt(page) || 1;
    const perPage = parseInt(limit) || 20;

    const conversations = await Conversation.find({
      $or: [{ createdBy: req.user }, { participant: req.user }],
    })
      .populate("createdBy", "name email")
      .populate("participant", "name email")
      .sort({ updatedAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    const totalConversation = await Conversation.countDocuments({
      $or: [{ createdBy: req.user }, { participant: req.user }],
    });

    res.json({
      conversations,
      total: totalConversation,
    });
  } catch (error) {
    next(error);
  }
};

exports.sendMessage = async (req, res, next) => {
  try {
    const { conversation, receiver, message } = req.body;
    const newMessage = await Message.create({
      conversation,
      sender: req.user,
      receiver,
      message,
    });

    // update updatedAt field in conversation
    await Conversation.findByIdAndUpdate(conversation, {
      updatedAt: new Date(),
    });

    const findConversation = await Conversation.findById(conversation)
      .populate("createdBy", "name email")
      .populate("participant", "name email");

    const findMessage = await Message.findById(newMessage._id)
      .populate("sender", "name email")
      .populate("receiver", "name email");
    global.io.emit("newMessage", findMessage);

    global.io.emit("newConversation", {
      conversation: findConversation,
      message: findMessage,
    });

    res.json(findMessage);
  } catch (error) {
    next(error);
  }
};

exports.getMessages = async (req, res, next) => {
  const { conversationId } = req.params;
  const { page, limit } = req.query;
  const currentPage = parseInt(page) || 1;
  const perPage = parseInt(limit) || 10;
  try {
    const messages = await Message.find({ conversation: conversationId })
      .populate("sender", "name email")
      .populate("receiver", "name email")
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    const totalCount = await Message.countDocuments({
      conversation: conversationId,
    });

    res.json({
      messages: messages,
      total: totalCount,
    });
  } catch (error) {
    next(error);
  }
};

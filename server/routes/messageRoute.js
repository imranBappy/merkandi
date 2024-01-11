const router = require("express").Router();

const {
  createConversation,
  getConversation,
  sendMessage,
  getMessages,
} = require("../controllers/messageController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.post(
  "/",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  createConversation
);
router.get(
  "/",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  getConversation
);
router.post(
  "/send",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  sendMessage
);

router.get(
  "/all/:conversationId",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  getMessages
);

module.exports = router;

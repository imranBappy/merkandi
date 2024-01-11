const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");
const router = require("express").Router();
const {
  getSettings,
  updateSettings,
  createSettings,
} = require("../controllers/settingsControllers");

router.get("/", getSettings);
router.patch("/", isAuthenticated([userType.admin]), updateSettings);

module.exports = router;

const router = require("express").Router();

const { getClicks, createClick } = require("../controllers/clickControllers");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get("/", isAuthenticated([userType.admin, userType.premium]), getClicks);
router.post(
  "/",
  isAuthenticated([
    userType.admin,
    userType.premium,
    userType.standard,
    userType.staff,
  ]),
  createClick
);

module.exports = router;

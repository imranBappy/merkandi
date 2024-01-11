const router = require("express").Router();
const {
  getPages,
  getPage,
  createPage,
  updatePage,
  deletePage,
} = require("../controllers/pageControllers");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get("/", isAuthenticated([userType.admin]), getPages);
router.get("/:slug", getPage);
router.post("/", isAuthenticated([userType.admin]), createPage);
router.patch("/:slug", isAuthenticated([userType.admin]), updatePage);
router.delete("/:slug", isAuthenticated([userType.admin]), deletePage);

module.exports = router;

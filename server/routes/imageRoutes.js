const {
  getImage,
  getImages,
  createImage,
  updateImage,
  deleteImage,
  createImages,
  searchImage,
} = require("../controllers/ImageController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

const router = require("express").Router();

router.get("/", getImages);
router.get("/search", searchImage);

router.get("/:id", getImage);
router.post(
  "/",
  isAuthenticated([userType.admin, userType.premium, userType.staff]),
  createImage
);
router.post(
  "/bulk",
  // isAuthenticated([userType.admin, userType.premium, userType.staff]),
  createImages
);
router.put(
  "/:id",
  isAuthenticated([userType.admin, userType.premium, userType.staff]),
  updateImage
);
router.delete(
  "/:id",
  isAuthenticated([userType.admin, userType.premium, userType.staff]),
  deleteImage
);


module.exports = router;

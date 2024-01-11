const router = require("express").Router();
const {
  getStore,
  getStores,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/storeControllers");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get("/", getStores);
router.get("/:country", getStore);
router.post("/", isAuthenticated([userType.premium]), createStore);
router.patch("/:id", isAuthenticated([userType.premium]), updateStore);
router.delete("/:id", isAuthenticated([userType.premium]), deleteStore);

module.exports = router;

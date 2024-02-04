const router = require("express").Router();
const {
  adminAuthController,
  createNewAdmin,
} = require("../controllers/adminAuthController");
router.post("/admin/login", adminAuthController);
router.post("/admin/signup", createNewAdmin);

module.exports = router;

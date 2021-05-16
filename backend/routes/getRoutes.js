const express = require("express");
const router = express.Router();
const authLogin = require("../middlewares/authLogin");
const authActiveUser = require("../middlewares/authActiveUser");

router
  .route("/home")
  .get(
    authLogin,
    authActiveUser,
    require("../controllers/getControllers/home")
  );
router.route("/login").get(require("../controllers/getControllers/login"));
router.route("/signup").get(require("../controllers/getControllers/signup"));
router
  .route("/verifyEmailAndPhone")
  .get(authLogin, require("../controllers/getControllers/verifyEmailAndPhone"));
router
  .route("/sendVerificationEmail")
  .get(
    authLogin,
    require("../controllers/getControllers/sendVerificationEmail")
  );
router
  .route("/verifyEmail")
  .get(authLogin, require("../controllers/getControllers/verifyEmail"));

module.exports = router;

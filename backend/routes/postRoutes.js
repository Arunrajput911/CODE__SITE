const express = require("express");
const router = express.Router();

router.route("/register").post(require("../controllers/postControllers/signup"));
router.route("/login").post(require('../controllers/postControllers/login'));
router.route('/verifyOtp').post(require('../controllers/postControllers/verifyOtp'));
router.route('/recoverPassword').post(require("../controllers/postControllers/recoverPassword"));
router.route('/setPassword').post(require("../controllers/postControllers/setPassword"));
router.route('/changePassword').post(require("../controllers/postControllers/changePassword"));
router.route("/verifyCertificate").post(require('../controllers/postControllers/verifyCertificate'));
router.route('/updateProfile').post(require('../controllers/postControllers/updateProfile'));
router.route('/contact').post(require("../controllers/postControllers/contact"));
router.route('/updateMobile').post(require('../controllers/postControllers/updateMobile'));
router.route('/resendOtp').post(require('../controllers/postControllers/resendOtp'));
<<<<<<< HEAD

router.route("/careers").post(require("../controllers/postControllers/careers"))
=======
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//-------------------------------------admin routes-------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
router.route('/admin/addEvent').post(require('../controllers/postControllers/admin/addEvent'));
>>>>>>> 185bacbf415d4c78407c525743ed874157ae1d63
module.exports = router;
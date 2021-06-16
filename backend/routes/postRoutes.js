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
<<<<<<< HEAD

router.route("/careers").post(require("../controllers/postControllers/careers"))
=======
=======
router.route('/uploadfile').post(require('../controllers/postControllers/uploadFile'));
router.route('/event/:id/register').post(require('../controllers/postControllers/eventRegistration'))
>>>>>>> 5a0564c63ac5070c1a63e8bcb2527f499cab1b34
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//-------------------------------------admin routes-------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
router.route('/admin/addEvent').post(require('../controllers/postControllers/admin/addEvent'));
<<<<<<< HEAD
>>>>>>> 185bacbf415d4c78407c525743ed874157ae1d63
=======
router.route('/admin/events/:id/registrations/sendMsg').post(require('../controllers/postControllers/admin/sendMsg'));
>>>>>>> 5a0564c63ac5070c1a63e8bcb2527f499cab1b34
module.exports = router;
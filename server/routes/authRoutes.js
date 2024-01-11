const { authGetController, singinPostController, resetController, updateController, signupController, forgotPasswordController, verifyAccountController } = require('../controllers/authControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();


router.get('/', isAuthenticated, authGetController);
router.post('/signin', singinPostController);
router.post('/signup', signupController);
router.patch('/update', isAuthenticated, updateController);
router.post('/reset', resetController);
router.post('/forget', forgotPasswordController);
router.post('/verify', verifyAccountController);



module.exports = router;
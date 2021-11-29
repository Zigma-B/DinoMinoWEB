const {Router }=require('express');
const {userPointGet}= require('../controllers/userPointCTRlS')
const router = Router();


router.get('/', userPointGet);


module.exports = router;

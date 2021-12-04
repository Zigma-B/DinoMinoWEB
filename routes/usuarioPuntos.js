const {Router }=require('express');
const {userPointGet, userPointPost}= require('../controllers/usuarioPuntos')
const router = Router();


router.get('/', userPointGet);
router.post('/', userPointPost);


module.exports = router;

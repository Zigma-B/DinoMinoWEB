const {Router }=require('express');
const {userPointGet}= require('../controllers/usuarioPuntos')
const router = Router();


router.get('/', userPointGet);


module.exports = router;

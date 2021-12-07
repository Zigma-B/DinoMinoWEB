const {Router }=require('express');
const {userPointGet, userPointPost, Top}= require('../controllers/usuarioPuntos')
const router = Router();


router.get('/', userPointGet);
router.post('/', userPointPost);
router.post('/top/:name/:score', Top);


module.exports = router;

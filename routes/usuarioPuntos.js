const {Router }=require('express');
const {userPointGet, userPointPost, logOut, getStatus, Top, getTop}= require('../controllers/usuarioPuntos')
const router = Router();


router.get('/', userPointGet);
router.post('/', userPointPost);
router.post('/status', logOut);
router.post('/getStatus', getStatus);
router.post('/top/:name/:score', Top);
router.get('/top', getTop);


module.exports = router;

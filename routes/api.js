const {Router} = require('express');
const {apiActualizarGet, apiActualizarPost}  =require('../controllers/api');
const router = Router();


router.get('/', apiActualizarGet);
router.post('/', apiActualizarPost);


module.exports = router;
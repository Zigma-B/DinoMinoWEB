const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { login } = require('../controllers/auth');


const router = Router();

router.post('/',[
    check('user', 'El usuario es obligatorio').notEmpty(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validarCampos
],login );



module.exports = router;
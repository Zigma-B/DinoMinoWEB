const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');



const usuariosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}

const crearUsuarioPost = async(req= request, res = response) => {
    const {nombre, apePaterno, apeMaterno, genero, fNacimiento,user, password}= req.body
    
    
    const data = {
        usuario:{
            nombre: nombre, 
            apePaterno: apePaterno, 
            apeMaterno: apeMaterno, 
            genero: genero, 
            fNacimiento: fNacimiento,
            user: user, 
            password:password
        }
        
    }
    const usuario = new Usuario(data);
    // const saltos = bcryptjs.genSaltSync(); 
    // data.usuario.password = bcryptjs.hashSync(password, saltos);

    await usuario.save();
    res.send(usuario)

}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    
    res.json(usuario);
}




module.exports = {
    usuariosGet,
    crearUsuarioPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apePaterno:{
        type:String,
        required: [true, 'El apellido paterno es obligatorio']
    },
    apeMaterno:{
        type:String,
        required: [true, 'El apellido materno es obligatorio']
    },
    fNacimiento:{
        type:String,
        required: [true, 'la fecha es obligatoria']
    },
    genero:{
        type:String,
        require: [true, 'Es necesario el genero'],
        enum:['Femenino','Masculino']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: false
    },
    tiempo:{
        type:Number
    },
    score:{
        type:Number
    }

    
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario  } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );

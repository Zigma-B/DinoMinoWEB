const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

const saltRound=10;

const UsuarioSchema = Schema({
    usuario:[{
        nombre:String,
        apePaterno:String,
        apeMaterno: String,
        genero:{
            type:Boolean,
            require: [true, 'Es necesario el genero'],
            enum:['Femenino','Masculino']
        },
        fNacimiento:String,
        user:String,
        password:String

    }],
    datos:[{
        tiempo:{
            type:String
        },
        score:{
            type:String
        }
         }]

    
});

/*
UsuarioSchema.pre('save',function(next){
    if(this.isNew || this.isModified('password')){
        bcrypt.hashSync(this.password,saltRound, (err,hashedPassword)=>{
            if(err){
                next(err);
            }else{
                this.password = hashedPassword;
                next();
            }
        })
    }else{
        next();
    }
});
*/

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario  } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );

const {request, response} = require('express');
const Usuario = require('../models/usuario');

const apiActualizarGet = async(req=request,res=response)=>{
  
    res.json({
        msg:'working-get'
    });
}
const apiActualizarPost = async(req=request,res=response)=>{
    let {correo, score, tiempo} = req.body;
    
    try {
      Usuario.findOneAndUpdate({correo:correo},{score:score, tiempo:tiempo},(err,data)=>{
        if(err){
            res.status(404).json({
                msg:'revisar los parametros'
            });
        }else if(data){
            res.status(200).json({
                msg:'datos actualizados',
                msg:data
            });
        }else{
            res.status(500).json({
                msg:"contactar al administrador"
            });
        }
      }) 
    } catch (err) {
        throw err 
    }
}




module.exports={
    apiActualizarGet,
    apiActualizarPost
}
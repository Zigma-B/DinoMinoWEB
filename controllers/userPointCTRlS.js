const {request, response} = require('express');

const Usuario = require('../models/usuario');

const userPointGet = async(req=request,res=response)=>{
  
    const[usuario] = await Promise.all([
        Usuario.find()
    ]); 
    res.json({
        usuario
    })
    
}




module.exports={
    userPointGet
}



const {request, response} = require('express');

const Usuario = require('../models/usuario');

const userPointGet = async(req=request,res=response)=>{
  
    const[usuario] = await Promise.all([
        Usuario.find()
    ]); 
    res.json({
    usuario
    });
    //res.redirect('home.html', console.log(usuario))
    
}




module.exports={
    userPointGet
}
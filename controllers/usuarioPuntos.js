const {request, response} = require('express');

const Usuario = require('../models/usuario');

const userPointGet = async(req=request,res=response)=>{
  
    const[usuario] = await Promise.all([
        Usuario.find()
    ]); 
    res.redirect('home.html', console.log(usuario))
    
}




module.exports={
    userPointGet
}
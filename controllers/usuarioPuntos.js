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

const userPointPost = async(req, res)=>{

    const {correo} = req.body;
    const r = await Usuario.find({correo:correo});
    
    res.json({
        msg:"post working",
        r
    })

}




module.exports={
    userPointGet,
    userPointPost
}
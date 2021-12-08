const {request, response} = require('express');
const Topm = require('../models/top');

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
const Top = async(req, res)=>{

    const {name, score} = req.params;
    const top = new Topm({name, score});
    await top.save();
    console.log('====================================');
    console.log(top);
    console.log('====================================');
    res.json({
        msg:"post working",
        top
    })

}
const getTop = async(req, res) => {
    const all =  await Topm.find();
    
    res.json({
        all
    })
}



module.exports={
    userPointGet,
    userPointPost,
    Top,getTop
}
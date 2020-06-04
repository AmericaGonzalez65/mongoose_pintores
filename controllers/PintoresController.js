let mongoose =  require('mongoose');
//Vamos a unirlo al modelo
let Pintores = require('../models/Pintores')

let pintoresController = {};

/* Listar -> FIND() */
pintoresController.list = (req, res) => {
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if (err){
            console.log('Error:',err);
        }
        //console.log('Datos obtenidos');
        //console.log(estatal);
        res.render('../views/index',{
            pintores: pintor,
            title: "Listado de pintores",
            year: new Date().getFullYear()
        })
    })
};

module.exports = pintoresController;
const mongoose = require("mongoose");

const conexionBD = async ()=>{
    try{
        await mongoose.connect(process.env.DB_CONECTION);
        console.log("conectado a la base de datos DICTA");
    }catch(error){
        console.log("ERROR:" + error);
    }
}

module.exports = conexionBD
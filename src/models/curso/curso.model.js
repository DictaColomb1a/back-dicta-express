const {Schema, model} = require('mongoose');

const curso = new Schema({
    
    nombre:{
        type : String,
        required: true,
        trim: true
    },

    fechaPublicacion:{
        type: Date,
        required: true,
        trim: true
    },

    categoria:{
        type: String,
        required: true,
        trim: true,
    },
    precio:{
        type: Number,
        required: true,
        trim: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },

});

module.exports = model("Curso", curso)


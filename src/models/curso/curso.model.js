const {Schema, model} = require('mongoose');

const clases = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
        trim: true,
    },
});

const secciones = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    clases: [clases], // Array de clases dentro de la sección
});

const curso = new Schema({
    
    nombre:{
        type : String,
        required: true,
    },

    descripcion:{
        type: String,
        required: true
    },

    fechaPublicacion:{
        type: Date,
        required: true,
        trim: true
    },
    imagencurso:{
        type: String,
        required: true,
        trim: true
    },

    nivel:{
        type: String,
        required: true
    },

    categoria:{
        type: String,
        required: true,
        enum: ['directivos', 'colaboradores'],
        trim: true,
    },
    subcategoria:{
        type: String,
        required:  true,
        trim: true
    },
    idioma:{
        type: String,
        required:true,
        trim: true
    },
    estado: {
            type: String,
            required: true,
            enum: ['activo', 'inactivo'],
            trim: true,
    },
    precio:{
        type: Number,
        required: true,
        trim: true,
    },
    nombreCreador:{
        type:String,
        required:true,
    },
    secciones: [secciones],

});

module.exports = model("Curso", curso)


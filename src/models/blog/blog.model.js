const {Schema, model} = require('mongoose');

const blog = new Schema({
    titulo:{
        type: String,
        uniqued: true,
        required: true,
    },
    fraseClave:{
        type: String,
        required: true,
    },
    descripcionBreve:{
        type: String,
        required: true,
    },
    parrafo1:{
        type: String,
        required: true,
    },
    parrafo2:{
        type: String,
        required: true,
    },
    parrafo3:{
        type: String,
        required: true,
    },
    parrafo4:{
        type: String,
        required: true,
    },
    img1:{
        type: String,
        required: true
    },
    img2:{
        type: String,
        required: true
    },
    img3:{
        type: String,
        required: true
    },
    img4:{
        type: String,
        required: true
    },

    categoriaBlog:{
        type:String,
        required: true,
        enum: ['niños', 'jovenes', 'adultos'],
        trim: true
    },
    estado: {
            type: String,
            required: true,
            enum: ['activo', 'inactivo'],
            trim: true,
    },
    nombreCreadorBlog:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = model("Blog", blog);
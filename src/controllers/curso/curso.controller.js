const Curso = require("../../models/curso/curso.model");


const mostrarCurso =  async (req, res)=>{//aprobado
    try {
        const curso = await Curso.find().sort({createdAt: -1});

        return res.json({
            ok: true,
            curso
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Curso no encontrado"
        });
    }
};

const buscarCursoNombre = async (req, res) => {
    const { nombre } = req.params;

    try {
        const curso = await Curso.findOne({ nombre });

        if (!curso) {
            return res.status(404).json({
                ok: false,
                msg: "Curso no encontrado",
            });
        }

        return res.json({
            ok: true,
            curso,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar el curso ",
        });
    }
};

const mostrarCursosColaboradores = async (req, res) => {
    try {
        const categoria = "colaboradores"; // Cambia "colaboradores" a la categoría deseada
        const curso = await Curso.find({ categoria }).sort({ createdAt: -1 });

        return res.json({
            ok: true,
            curso,
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Cursos de colaboradores no encontrados",
        });
    }
};

const mostrarCursosDirectivos = async (req, res) => {
    try {
        const categoria = "directivos"; // Cambia "directivos" a la categoría deseada
        const curso = await Curso.find({ categoria }).sort({ createdAt: -1 });

        return res.json({
            ok: true,
            curso,
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Cursos de directivos no encontrados",
        });
    }
};

const crearCurso =  async (req, res)=>{//aprobado
    const id = req.uid;
    const {nombre, fechaPublicacion, imagencurso, categoria, estado, nombreCreador, precio, secciones} = req.body;

    try {
        let curso = await Curso.findOne({nombre});

        if (curso) {
            return res.status(501).json({
                ok:false,
                msg:"Curso ya Registrado"
            });
        }

        const nuevoCurso = new Curso({nombre, fechaPublicacion, imagencurso, categoria, estado, nombreCreador, precio, secciones,});
        await nuevoCurso.save();
        res.status(200).json({
            ok:true,
            msg:"Curso Creado",
            nuevoCurso
        });
    } catch (error) {
        res.json({
            ok:false,
            msg:"Error al guardar curso"
        });
    }
};


const actualizarCurso =  async (req, res)=>{//aprobado
    const {id} = req.params;
    const {nombre, fechaPublicacion, imagencurso, categoria, estado, nombreCreador, precio} = req.body;
    try {
        const curso = await Curso.findByIdAndUpdate(id, {nombre, fechaPublicacion, imagencurso, categoria, estado, nombreCreador, precio, secciones}, {new: true});
        return res.json({
            ok: true,
            msg:"curso actualizado",
            curso
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "curso no actualizada"
        });
    }
};


const eliminarCurso =  async (req, res)=>{//aprobado
    const {id} = req.params;

    try {
        const curso = await Curso.findByIdAndRemove(id);
        
        return res.json({
            ok: true,
            msg:"Curso eliminado",
            curso
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Error al eliminar"
        });
    }
};

module.exports = {
    mostrarCurso, buscarCursoNombre, crearCurso, actualizarCurso, eliminarCurso, mostrarCursosColaboradores, mostrarCursosDirectivos
}

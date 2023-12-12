const{Router} = require("express");
const{check} = require("express-validator");

const { mostrarCurso, buscarCursoNombre, crearCurso, actualizarCurso, eliminarCurso, mostrarCursosColaboradores, mostrarCursosDirectivos} = require("../../controllers/curso/curso.controller")

const cursoRouter = Router();

cursoRouter.get("/readAll", [], mostrarCurso);
cursoRouter.get("/search/:nombre", [], buscarCursoNombre);
cursoRouter.get("/colaboradores", [], mostrarCursosColaboradores);
cursoRouter.get("/directivos", [], mostrarCursosDirectivos );
cursoRouter.post("/create", [], crearCurso);
cursoRouter.delete("/delete/:id", [], eliminarCurso);
cursoRouter.put("/update/:id", [], actualizarCurso);

module.exports = cursoRouter;
require("dotenv").config();

//importamos el express

const express = require("express");
const cors = require("cors");

//importamos a la base de datos

const conexionBD = require("./src/db/config");

//configurar entorno ambiente

const app = express();
conexionBD();

app.use(cors());
app.use(express.json());

//servidor

//IMPORTAR RUTAS


const cursoRouter = require("./src/routes/curso/curso.routes");
const blogRouter = require("./src/routes/blog/blog.routes");

//Ruta estatia

app.use("/", express.static(__dirname + "/src/public"));

//Rutas dinamicas


app.use("/curso", cursoRouter);
app.use("/blog", blogRouter);

app.listen(process.env.PORT, () =>{
    console.log("Aplicacion corriendo correctamente en el puerto 3000");
});
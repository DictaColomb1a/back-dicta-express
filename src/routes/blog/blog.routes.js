const{Router} = require("express");
const{check} = require("express-validator")

const { crearBlog, mostrarBlog, actualizarBlog, eliminarBlog, mostrarBlogAdultos, mostrarBlogJovenes, mostrarBlogNinos} = require("../../controllers/blog/blog.controller")

const blogRouter = Router();

blogRouter.get("/readAll", [], mostrarBlog);
blogRouter.get("/ninos", [], mostrarBlogNinos);
blogRouter.get("/jovenes", [], mostrarBlogJovenes );
blogRouter.get("/adultos", [], mostrarBlogAdultos);
blogRouter.post("/create", [], crearBlog);
blogRouter.delete("/delete/:id", [], eliminarBlog);
blogRouter.put("/update/:id", [], actualizarBlog);

module.exports = blogRouter;
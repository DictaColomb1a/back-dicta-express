const Blog = require("../../models/blog/blog.model");

const crearBlog = async(req, res ) =>{
    const{
        titulo,
        fraseClave,
        descripcionBreve,
        parrafo1,
        parrafo2,
        parrafo3,
        parrafo4,
        img1,
        img2,
        img3,
        img4,
        categoriaBlog,
        estado,
        nombreCreadorBlog,
        
    } = req.body;
    const id = req.uid;
    try{
        let blog = await Blog.findOne({titulo});
        if(blog){
            return res.status(501).json({
                ok: false,
                msg: "Blog existente",
            });
        }
        const newBlog = new Blog({
            titulo,
            fraseClave,
            descripcionBreve,
            parrafo1,
            parrafo2,
            parrafo3,
            parrafo4,
            img1,
            img2,
            img3,
            img4,
            categoriaBlog,
            estado,
            nombreCreadorBlog,
        });
        await newBlog.save();
        res.status(200).json({
            ok: true,
            msg: "Blog creado",
            newBlog
        });
    }catch(error){
        res.json({
            ok: false,
            msg: "Error al crear Blog"
        });
    }
};

const mostrarBlog = async (req, res) => {

    try {

      const blog = await Blog.find().sort({ createdAt: -1 });
      return res.json({
        ok: true,
        blog,
      });
    } catch (error) {
      return res.status(404).json({
        ok: false,
        msg: "blog no encontrado",
      });
    }
  };
  const buscarBlogNombre = async (req, res) => {
    const { nombre } = req.params;

    try {
        const blog = await Blog.findOne({ titulo: nombre });

        if (!blog) {
            return res.status(404).json({
                ok: false,
                msg: "Blog no encontrado",
            });
        }

        return res.json({
            ok: true,
            blog,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar el blog por nombre",
        });
    }
};

  const mostrarBlogNinos = async (req, res) => {
    try {
        const categoriaBlog = "niños"; // Cambia "colaboradores" a la categoría deseada
        const blog = await Blog.find({ categoriaBlog }).sort({ createdAt: -1 });

        return res.json({
            ok: true,
            blog
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Blogs no encontrados",
        });
    }
};

const mostrarBlogJovenes = async (req, res) => {
  try {
      const categoriaBlog = "jovenes"; // Cambia "colaboradores" a la categoría deseada
      const blog = await Blog.find({ categoriaBlog }).sort({ createdAt: -1 });

      return res.json({
          ok: true,
          blog
      });
  } catch (error) {
      return res.status(404).json({
          ok: false,
          msg: "Blogs no encontrados",
      });
  }
};

const mostrarBlogAdultos = async (req, res) => {
  try {
      const categoriaBlog = "adultos"; // Cambia "colaboradores" a la categoría deseada
      const blog = await Blog.find({ categoriaBlog }).sort({ createdAt: -1 });

      return res.json({
          ok: true,
          blog
      });
  } catch (error) {
      return res.status(404).json({
          ok: false,
          msg: "Blogs no encontrados",
      });
  }
};

  const actualizarBlog = async (req, res) => {
    const { id } = req.params;
    const { 
        titulo,
        fraseclave,
        descripcionBreve,
        parrafo1,
        parrafo2,
        parrafo3,
        parrafo4,
        img1,
        img2,
        img3,
        img4,
        categoriaBlog,
        estado,
        nombreCreadorBlog,
     } = req.body;
  
    try {
      const blog = await Blog.findByIdAndUpdate(
        id,
        { titulo,
            fraseclave,
            descripcionBreve,
            parrafo1,
            parrafo2,
            parrafo3,
            parrafo4,
            img1,
            img2,
            img3,
            img4,
            categoriaBlog,
            estado,
            nombreCreadorBlog,
          },
        { new: true }
      );
      return res.json({
        ok: true,
        msg: "blog actualizado",
        blog,
      });
    } catch (error) {
      return res.status(404).json({
        ok: false,
        msg: "blog no actualizado",
      });
    }
  };

  const eliminarBlog = async (req, res) => {
    const { id } = req.params;
  
    try {
      const blog = await Blog.findByIdAndRemove(id);
  
      return res.json({
        ok: true,
        msg: "blog Eliminado",
        blog,
      });
    } catch (error) {
      return res.status(404).json({
        ok: false,
        msg: "Error no se pudo eliminar blog",
      });
    }
  };

module.exports = {crearBlog, mostrarBlog, buscarBlogNombre, actualizarBlog, eliminarBlog, mostrarBlogAdultos, mostrarBlogJovenes, mostrarBlogNinos}
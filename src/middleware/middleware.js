const validateNoNumbersOrSpecialChars = (value) => {
    const regex = /^[a-zA-Z\s]+$/; // Permite solo letras y espacios
    return regex.test(value);
};

const validateCursoFields = (req, res, next) => {
    const { nombre, descripcion, categoria, secciones } = req.body;

    if (!validateNoNumbersOrSpecialChars(nombre)) {
        return res.status(400).json({
            ok: false,
            msg: 'El campo "nombre" debe contener solo letras y espacios.',
        });
    }

    if (categoria && !['directivos', 'colaboradores'].includes(categoria)) {
        return res.status(400).json({
            ok: false,
            msg: 'El campo "categoria" debe ser "directivos" o "colaboradores".',
        });
    }

    if (!validateNoNumbersOrSpecialChars(descripcion)) {
        return res.status(400).json({
            ok: false,
            msg: 'El campo "descripcion" debe contener solo letras y espacios.',
        });
    }


    //Validación para secciones y clases
    
    if (secciones && secciones.length > 0) {
        for (const seccion of secciones) {
            if (!validateNoNumbersOrSpecialChars(seccion.titulo)) {
                return res.status(400).json({
                    ok: false,
                    msg: 'El campo "titulo" de una sección debe contener solo letras y espacios.',
                });
            }

            if (seccion.clases && seccion.clases.length > 0) {
                for (const clase of seccion.clases) {
                    if (!validateNoNumbersOrSpecialChars(clase.titulo)) {
                        return res.status(400).json({
                            ok: false,
                            msg: 'El campo "titulo" de una clase debe contener solo letras y espacios.',
                        });
                    }
                }
            }
        }
    }

    next(); // Si pasa la validación, pasa al siguiente middleware o controlador
};

module.exports = { validateCursoFields };
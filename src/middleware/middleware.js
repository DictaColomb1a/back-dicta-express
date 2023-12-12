const validateNoNumbersOrSpecialChars = (value) => {
    const regex = /^[a-zA-Z\s]+$/; // Permite solo letras y espacios
    return regex.test(value);
};

const validateCursoFields = (req, res, next) => {
    const { nombre, descripcion, categoria } = req.body;

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
    next(); // Si pasa la validación, pasa al siguiente middleware o controlador
};

module.exports = { validateCursoFields };
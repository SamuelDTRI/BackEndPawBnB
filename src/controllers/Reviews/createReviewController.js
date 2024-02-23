const { Reviews } = require("../../db");

const createReviews = async (req, res) => {
    try {
        const { comment, rating, ownerId, dogSitterId } =  req.body;

        // Validar los datos de entrada
        if (!comment || !rating || !ownerId || !dogSitterId) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }

        // Crear el comentario en la base de datos
        const reviewCreate = await Reviews.create({ comment, rating, ownerId, dogSitterId});

        return res.status(201).json(reviewCreate);

    } catch (error) {
        console.error('Error al agregar un comentario a la DB:', error.message);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = { createReviews };
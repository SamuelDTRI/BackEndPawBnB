const { Reviews, Owners } = require('../../db');

const getReviewsById = async ( req, res ) => {
    try {
        const dogSitterId = req.params.id;

        // Obtener todos los comentarios incluyendo la información del dueño asociado
        const reviews = await Reviews.findAll({
            where: { dogSitterId },
            include: {
            model: Owners,
            attributes: ['name', 'photo'] // Incluir el nombre y la URL de la foto de perfil del dueño
        }
      });

        // Si se encuentran comentarios, devolverlos en la respuesta
        return res.status(200).json(reviews);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los comentarios' });
    }
}

module.exports = { getReviewsById };
const { Reviews } = require('../../db');

const getAllReviews = async ( req, res ) => {
    try {
        // Obtener todos los reviews de la base de datos
        const reviews = await Reviews.findAll();
    
        // Si se encuentran reviews, devolverlos en la respuesta
        return res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los reviews' });
    }
}

module.exports = { getAllReviews };
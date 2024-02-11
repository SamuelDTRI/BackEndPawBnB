const { DogSitters, Bookings } = require("../../db");

const getSittersById = async (id) => {

    const existingSitter = await DogSitters.findByPk(id); 
    if (!existingSitter) {
        return (response = {
            success: false,
            message: "No se encontró un cuidador con ese valor Id.",
        });
    }
    return (response = {
        success: true,
        message: "Usuario encontrado.",
        sitter: existingSitter,
    });
};

module.exports = { getSittersById };

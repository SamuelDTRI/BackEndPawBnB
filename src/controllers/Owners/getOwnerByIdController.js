const { Owners, Bookings } = require("../../db");

const getOwnerById = async (id) => {
    const existingOwner = await Owners.findByPk(id);
    if (!existingOwner) {
        return (response = {
        success: false,
        message: "No se encontró un cliente con ese valor Id.",
        });
    }
    return (response = {
        success: true,
        message: "Usuario encontrado.",
        owner: existingOwner,
    });
};

module.exports = { getOwnerById };

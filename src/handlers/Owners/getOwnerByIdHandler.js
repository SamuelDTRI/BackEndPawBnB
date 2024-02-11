const {
    getOwnerById,
} = require("../../controllers/Owners/getOwnerByIdController.js");

const getOwnerByIdHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getOwnerById(id);
        if (!result.success) {
        return res.status(404).json({ success: false, message: result.message });
        }
        res
        .status(200)
        .json({ success: true, message: result.message, owner: result.owner });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res
        .status(500)
        .json({
            success: false,
            message: "Error al buscar el cuidador de perros.",
        });
    }
};

module.exports = { getOwnerByIdHandler };

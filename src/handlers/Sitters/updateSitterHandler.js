const { updateSitter} = require("../../controllers/Sitters/updateSitterController.js");

const updateSitterHandler = async (req, res) => {
    const { id } = req.params;
    
    try {
        const { success, message, updatedSitter } = await updateSitter({ id, ...req.body });
        console.log("Resultado de la actualización:", { success, message, updatedSitter })
        res.status(200).json({ success:true, message: "¡El sitter se actualizó correctamente!", updatedSitter });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(404).json({ error: error.message });
    }
};

module.exports = { updateSitterHandler }; 
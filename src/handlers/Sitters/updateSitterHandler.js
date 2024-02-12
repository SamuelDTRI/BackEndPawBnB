const { updateSitter} = require("../../controllers/Sitters/updateSitterController.js");

const updateSitterHandler = async (req, res) => {
    const { id } = req.params;
    
    console.log("Datos recibidos en la solicitud:", req.body); 
    console.log("ID del sitter a actualizar:", id); 
    try {
        const { success, message, updatedSitter } = await updateSitter({ id, ...req.body });
        console.log("Resultado de la actualización:", { success, message, updatedSitter })
        if (success) {
            res.status(200).json({ success:true, message: "¡El sitter se actualizó correctamente!", updatedSitter });
        } else {
            res.status(400).json({ success: false, error: message });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return res.status(500).json({
            message: "Se produjo un error al procesar la solicitud.",
        });
    }
};

module.exports = { updateSitterHandler }; 
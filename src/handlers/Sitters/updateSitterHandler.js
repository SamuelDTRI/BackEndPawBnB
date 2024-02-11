const { updateSitter} = require("../../controllers/Sitters/updateSitterController.js");

const updateSitterHandler = async (req, res) => {
    try {
        const { success, message, updatedSitter } = await updateSitter(req.body);
        if (success) {
            res.status(200).json({ message, updatedSitter });
        } else {
            res.status(400).json({ success, error: message });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return res.status(500).json({
            message: "Se produjo un error al procesar la solicitud.",
        });
    }
};

module.exports = { updateSitterHandler };
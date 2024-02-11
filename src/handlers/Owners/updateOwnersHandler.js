const {
    updateOwner,
    } = require("../../controllers/Owners/updateOwnersController.js");

    const updateOwnerHandler = async (req, res) => {
    try {
        const { success, message, updatedOwner } = await updateOwner(req.body);
        if (success) {
        res.status(200).json({ message, updatedOwner });
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

module.exports = { updateOwnerHandler };

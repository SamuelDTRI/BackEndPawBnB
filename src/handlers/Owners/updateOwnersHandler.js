const {
    updateOwner,
    } = require("../../controllers/Owners/updateOwnersController.js");

    const updateOwnerHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const { success, message, updatedOwner } = await updateOwner({id,...req.body,});
        if (success) {
        res.status(200).json({ message, updatedOwner });
        } else {
        res.status(400).json({ success, error: message });
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(404).json({ error: error.message });
    }
};

module.exports = { updateOwnerHandler };

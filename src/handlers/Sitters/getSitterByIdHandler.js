const { getSittersById } = require("../../controllers/Sitters/getSitterByIdController");

const getSitterByIdHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getSittersById(id); 
        if (!result.success) {
        return res.status(404).json({ success: false, message: result.message });
        }
        res.status(200).json({ success: true, message: result.message, sitter: result.sitter });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({ success: false, message: "Error al buscar el cuidador de perros." });
    }
};

module.exports = { getSitterByIdHandler };

const {
  createSitters,
} = require("../../controllers/Sitters/createSittersController");

const createSittersHandler = async (req, res) => {
  try {
    const { success, message, owner } = await createSitters(req.body);
    if (success) {
      res.status(200).json({ message, owner });
    } else {
      res.status(400).json({ success, error: message });
    }
  } catch (error) {
    console.error("Error al procesar el registro:", error);
    return res.status(500).json({
      message: "Se produjo un error al procesar el registro.",
    });
  }
};

module.exports = { createSittersHandler };

const {
  getAllSitters,
} = require("../../controllers/Sitters/getAllSittersController");

const getAllSittersHandler = async (req, res) => {
  try {
    const response = await getAllSitters();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllSittersHandler };

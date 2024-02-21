const {
  deleteSittersController,
} = require("../../controllers/Sitters/deleteSittersController");

const deleteSittersHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteSittersController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { deleteSittersHandler };

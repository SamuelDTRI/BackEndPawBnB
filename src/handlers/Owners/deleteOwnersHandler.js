const {
  deleteOwnersController,
} = require("../../controllers/Owners/deleteOwnersController");

const deleteOwnersHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteOwnersController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { deleteOwnersHandler };

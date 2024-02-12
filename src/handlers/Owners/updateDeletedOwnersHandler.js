const {
  updateDeletedOwnersController,
} = require("../../controllers/Owners/updateDeletedOwnersController");

const updateDeletedOwnersHandler = async (req, res) => {
  const { id } = req.params;
  const { deleted } = req.body;
  try {
    const response = await updateDeletedOwnersController(id, deleted);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateDeletedOwnersHandler };

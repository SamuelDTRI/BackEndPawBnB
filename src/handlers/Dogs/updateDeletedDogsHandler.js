const {
  updateDeletedDogsController,
} = require("../../controllers/Dogs/updateDeletedDogsController");

const updateDeletedDogsHandler = async (req, res) => {
  const { id } = req.params;
  const { deleted } = req.body;
  try {
    const response = await updateDeletedDogsController(id, deleted);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateDeletedDogsHandler };

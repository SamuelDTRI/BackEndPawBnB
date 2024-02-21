const {
  updateDeletedSittersController,
} = require("../../controllers/Sitters/updateDeletedSittersController");

const updateDeletedSittersHandler = async (req, res) => {
  const { id } = req.params;
  const { deleted } = req.body;
  try {
    const response = await updateDeletedSittersController(id, deleted);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateDeletedSittersHandler };

const {
  deleteDogsController,
} = require("../../controllers/Dogs/deletedDogsController");

const deleteDogsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteDogsController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { deleteDogsHandler }
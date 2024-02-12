const {
  getOwnerById,
} = require("../../controllers/Owners/getOwnerByIdController.js");

const getOwnerByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getOwnerById(id);
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
};

module.exports = { getOwnerByIdHandler };

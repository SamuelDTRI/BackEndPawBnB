const {
  getAllOwners,
} = require("../../controllers/Owners/getAllOwnersController");

const getAllOwnersHandler = async (req, res) => {
  try {
    const response = await getAllOwners();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllOwnersHandler };

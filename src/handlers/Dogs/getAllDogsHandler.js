const {
  getAllDogsController,
} = require("../../controllers/Dogs/getAllDogsController");

const getAllDogsHandler = async (req, res) => {
  try {
    const response = await getAllDogsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllDogsHandler };

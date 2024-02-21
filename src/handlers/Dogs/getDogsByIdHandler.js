const {
  getDogsByIdController,
} = require("../../controllers/Dogs/getDogsByIdController");

const getDogsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDogsByIdController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getDogsByIdHandler };

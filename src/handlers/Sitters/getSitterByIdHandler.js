const {
  getSittersById,
} = require("../../controllers/Sitters/getSitterByIdController");

const getSitterByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getSittersById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getSitterByIdHandler };

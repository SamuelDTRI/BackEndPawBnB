const {
  getBookingsByIdController,
} = require("../../controllers/Bookings/getBookingsByIdController");

const getBookingsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getBookingsByIdController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getBookingsByIdHandler };

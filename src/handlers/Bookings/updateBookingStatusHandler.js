const { updateBookingStatusController } = require("../../controllers/Bookings/updateBookingStatusController");

const updateBookingStatusHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const response = await updateBookingStatusController(id, status);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateBookingStatusHandler };

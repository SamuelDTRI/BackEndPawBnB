const {
  getAllBookingsController,
} = require("../../controllers/Bookings/getAllBookings");

const getAllBookingsHandler = async (req, res) => {
  try {
    const response = await getAllBookingsController();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllBookingsHandler };

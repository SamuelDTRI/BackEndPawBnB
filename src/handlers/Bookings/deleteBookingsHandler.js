const {
  deleteBookingsController,
} = require("../../controllers/Bookings/deleteBookingsController");

const deleteBookingsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteBookingsController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteBookingsHandler };

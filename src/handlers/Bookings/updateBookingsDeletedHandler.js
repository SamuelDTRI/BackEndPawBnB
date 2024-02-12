const {
  updateBookingsDeletedController,
} = require("../../controllers/Bookings/updateBookingsDeletedController");

const updateBookingsDeletedHandler = async (req, res) => {
  const { id } = req.params;
  const { deleted } = req.body;
  try {
    const response = await updateBookingsDeletedController(id, deleted);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateBookingsDeletedHandler }
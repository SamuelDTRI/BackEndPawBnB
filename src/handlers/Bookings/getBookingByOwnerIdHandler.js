const { getBookingsByOwnerIdController } = require("../../controllers/Bookings/getBookingsByOwnerIdController");

  const getBookingsByOwnerIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await getBookingsByOwnerIdController(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  
  module.exports = { getBookingsByOwnerIdHandler };
  
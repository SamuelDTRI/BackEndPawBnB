const {
  createBookingsController,
} = require("../../controllers/Bookings/createBookingsController");

const createBookingsHandler = async (req, res) => {
  const reserva = req.body;
  console.log({
   peticion: req.body
  });
  try {
    const response = await createBookingsController(
    reserva
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBookingsHandler };

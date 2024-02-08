const {
  createBookingsController,
} = require("../../controllers/Bookings/createBookingsController");

const createBookingsHandler = async (req, res) => {
  const { startDate, status, reviews, rating, ownerId, dogSitterId, dogId } = req.body;
  try {
    const response = await createBookingsController(
      startDate,
      status,
      reviews,
      rating,
      ownerId,
      dogSitterId,
      dogId
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBookingsHandler };

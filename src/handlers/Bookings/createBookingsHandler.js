const {
  createBookingsController,
} = require("../../controllers/Bookings/createBookingsController");

const createBookingsHandler = async (req, res) => {
  const {status, reviews, rating, ownerId,dogId,dogSitterId,dateCheckIn,dateCheckOut,
  entryTime,note } = req.body;
  console.log("soy el primer dogId", dogId)
  try {
    const response = await createBookingsController(
      status,
      reviews,
      rating,
      ownerId,
      dogId,
      dogSitterId,
      dateCheckIn,
      dateCheckOut,
      entryTime,
      note   
      );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBookingsHandler };

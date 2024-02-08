const { Bookings } = require("../../db");

const getAllBookingsController = async () => {
  const getAllBookings = await Bookings.findAll();
  return getAllBookings;
};

module.exports = { getAllBookingsController };

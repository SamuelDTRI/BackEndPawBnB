const { Bookings } = require("../../db");

const getBookingsByIdController = async (id) => {
  const bookingId = await Bookings.findByPk(id);
  return bookingId;
};
module.exports = { getBookingsByIdController };

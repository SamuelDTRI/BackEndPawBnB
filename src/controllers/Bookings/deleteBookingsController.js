const { Bookings } = require("../../db");

const deleteBookingsController = async (id) => {
  const booking = await Bookings.findOne({ where: { id } });

  if (!booking) {
    throw new Error("Reserva no encontrada");
  }

  await booking.destroy();
  return booking;
};

module.exports = { deleteBookingsController };

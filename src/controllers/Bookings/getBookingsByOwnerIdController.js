const { Bookings } = require("../../db");

const getBookingsByOwnerIdController = async (id) => {
 const booking = await  Bookings.findAll({ where: { ownerId : id } });
 return booking
};
module.exports = { getBookingsByOwnerIdController };
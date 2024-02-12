const { DogSitters, Bookings } = require("../../db");

const getSittersById = async (id) => {
  const existingSitter = await DogSitters.findByPk(id);
  if (!existingSitter) {
    throw new Error("No existe un Sitter con ese id");
  }
  return existingSitter;
};

module.exports = { getSittersById };

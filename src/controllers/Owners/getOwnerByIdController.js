const { Owners, Bookings } = require("../../db");

const getOwnerById = async (id) => {
  const existingOwner = await Owners.findByPk(id);
  if (!existingOwner) {
    throw error(`No existe un owner con este id: ${id}`);
  }
  return existingOwner;
};

module.exports = { getOwnerById };

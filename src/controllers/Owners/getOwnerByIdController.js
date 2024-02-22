const { Owners, Dogs } = require("../../db");

const getOwnerById = async (id) => {
  const existingOwner = await Owners.findByPk(id, { include: Dogs });
  if (!existingOwner) {
    throw error(`No existe un owner con este id: ${id}`);
  }
  return existingOwner;
};

module.exports = { getOwnerById };

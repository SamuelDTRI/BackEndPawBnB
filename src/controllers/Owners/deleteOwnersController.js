const { Owners } = require("../../db");

const deleteOwnersController = async (id) => {
  const deleteOwners = await Owners.findByPk(id);

  if (!deleteOwners) {
    throw new Error(`No se encontro owner con el id: ${id}`);
  }

  deleteOwners.destroy();

  return deleteOwners;
};

module.exports = { deleteOwnersController };

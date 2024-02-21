const { Dogs } = require("../../db");

const updateDeletedDogsController = async (id, deleted) => {
  const updateDogs = await Dogs.findByPk(id);

  if (!updateDogs) {
    throw new Error("Perro no encontrado");
  }

  updateDogs.deleted = deleted;
  await updateDogs.save();

  const updateDogsOk = await Dogs.findByPk(id);

  return updateDogsOk;
};

module.exports = { updateDeletedDogsController };

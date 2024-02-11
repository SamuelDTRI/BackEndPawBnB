const { Dogs } = require("../../db");

const deleteDogsController = async (id) => {
  const deleteDogs = await Dogs.findOne({ where: { id } });

  if (!deleteDogs) {
    throw new Error("Reserva no encontrada");
  }

  await deleteDogs.destroy();
  return deleteDogs;
};

module.exports = { deleteDogsController };

const { Owners } = require("../../db");

const updateDeletedOwnersController = async (id, deleted) => {
  const updateDeleted = await Owners.findByPk(id);
  if (!updateDeleted) {
    throw new Error("Owner no encontrado");
  }

  updateDeleted.deleted = deleted;
  await updateDeleted.save();
  return updateDeleted;
};

module.exports = { updateDeletedOwnersController };

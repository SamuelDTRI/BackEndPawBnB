const { DogSitters } = require("../../db");

const updateDeletedSittersController = async (id, deleted) => {
  const updateDeleted = await DogSitters.findByPk(id);

  if (!updateDeleted) {
    throw new Error("No se encontro el sitter");
  }

  updateDeleted.deleted = deleted;
  await updateDeleted.save();

  return updateDeleted;
};

module.exports = { updateDeletedSittersController };

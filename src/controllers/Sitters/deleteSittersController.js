const { DogSitters } = require("../../db");

const deleteSittersController = async (id) => {
  const deleteSitters = await DogSitters.findByPk(id);

  if (!deleteSitters) {
    throw new Error("No existe un sitter con ese id");
  }

  deleteSitters.destroy();
  return deleteSitters;
};

module.exports = { deleteSittersController };

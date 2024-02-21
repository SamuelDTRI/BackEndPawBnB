const { Dogs } = require("../../db");

const getDogsByIdController = async (id) => {
  const DogsById = await Dogs.findByPk(id);

  if (!DogsById) {
    throw error(`No existe un perro con este id: ${id}`);
  }

  return DogsById;
};

module.exports = { getDogsByIdController }
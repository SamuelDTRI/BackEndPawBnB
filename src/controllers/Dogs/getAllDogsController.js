const { Dogs } = require("../../db");

const getAllDogsController = async () => {
  const allDogs = await Dogs.findAll();
  return allDogs;
};

module.exports = { getAllDogsController };

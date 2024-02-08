const { DogSitters } = require("../../db");

const getAllSitters = async () => {
  const allSitters = await DogSitters.findAll();
  return allSitters;
};

module.exports = { getAllSitters };

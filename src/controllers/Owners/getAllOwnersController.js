const { Owners, Dogs } = require("../../db");

const getAllOwners = async () => {
  const allOwners = await Owners.findAll({
    include: Dogs,
  });
  return allOwners;
};

module.exports = { getAllOwners };

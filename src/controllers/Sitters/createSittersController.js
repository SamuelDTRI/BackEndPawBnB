const { DogSitters } = require("../../db");

const createSitters = async (
  name,
  surName,
  phone,
  description,
  dateOfBirth,
  role,
  email,
  password,
  address,
  zipcode,
  city,
  rates,
  availability,
  photos,
  pay
) => {
  const createSittersController = DogSitters.create({
    name,
    surName,
    phone,
    description,
    dateOfBirth,
    role,
    email,
    password,
    address,
    zipcode,
    city,
    rates,
    availability,
    photos,
    pay,
  });
  return createSittersController;
};

module.exports = { createSitters };

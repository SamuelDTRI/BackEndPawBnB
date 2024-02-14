const { DogSitters } = require("../../db");

const updateSitter = async (
  id,
  name,
  surName,
  phone,
  description,
  dateOfBirth,
  email,
  password,
  address,
  neighborhood,
  city,
  rates
) => {
  try {
    const [updated] = await DogSitters.update(
      {
        name,
        surName,
        phone,
        description,
        dateOfBirth,
        email,
        password,
        address,
        neighborhood,
        city,
        rates,
      },
      {
        where: { id },
      }
    );

    if (!updated) {
      throw new Error("No se encontró el cuidador con el id especificado");
    }

    const updatedSitter = await DogSitters.findOne({ where: { id } });

    return updatedSitter;
  } catch (error) {
    throw error;
  }
};

module.exports = { updateSitter };

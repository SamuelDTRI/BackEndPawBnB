const { Owners } = require("../../db");

const updateOwner = async (
  id,
  name,
  surName,
  neighborhood,
  email,
  password,
  address,
  phone,
  photo
) => {
  try {
    const [updated] = await Owners.update(
      {
        name,
        surName,
        neighborhood,
        email,
        password,
        address,
        phone,
        photo,
      },
      {
        where: { id },
      }
    );

    if (!updated) {
      throw new Error("No se encontró el propietario con el id especificado");
    }

    const updatedOwner = await Owners.findOne({ where: { id } });

    return updatedOwner;
  } catch (error) {
    throw error;
  }
};

module.exports = { updateOwner };

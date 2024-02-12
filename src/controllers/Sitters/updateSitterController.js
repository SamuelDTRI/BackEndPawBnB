const { DogSitters } = require("../../db");

const updateSitter = async ({
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
  rates,
}) => {
  // verificamos que llega un valor id.
  if (!id) {
    throw new Error("No se encontro un sitter con ese id");
  }
  // verificamos que exista un usuario que corresponda a esa id
  const findSitter = await DogSitters.findOne({ where: { id } });
  if (!findSitter) {
    throw new Error("No coincide el id con un sitter");
  }
  // verificamos que llega por lo menos un valor que se actualize.
  if (
    !(
      name ||
      surName ||
      phone ||
      description ||
      dateOfBirth ||
      email ||
      password ||
      address ||
      neighborhood ||
      city ||
      rates
    )
  ) {
    throw new Error(
      "Por favor, especifica la información que deseas actualizar."
    );
  }
  // actualizamos la información en la base de datos
  const updatedSitter = await DogSitters.update(
    {
      name: name ? name : findSitter.name,
      surName: surName ? surName : findSitter.surName,
      phone: phone ? phone : findSitter.phone,
      description: description ? description : findSitter.description,
      dateOfBirth: dateOfBirth ? dateOfBirth : findSitter.dateOfBirth,
      email: email ? email : findSitter.email,
      password: password ? password : findSitter.password,
      address: address ? address : findSitter.address,
      neighborhood: neighborhood ? neighborhood : findSitter.neighborhood,
      rates: rates ? rates : findSitter.rates,
      city: city ? city : findSitter.city,
    },
    {
      where: { id },
    }
  );
  return updateSitter;
};

module.exports = { updateSitter };

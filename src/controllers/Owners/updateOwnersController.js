const { Owners } = require("../../db");

const updateOwner = async ({
    id,
    name,
    surName,
    zipcode,
    city,
    email,
    address,
    role,
    phone,
    photo,
}) => {
  // verificamos que llega un valor id.
    if (!id) {
        return (response = {
        success: false,
        message: "Por favor, proporciona un ID válido.",
        });
    }
  // verificamos que exista un usuario que corresponda a esa id
    const findOwner = await Owners.findOne({ where: { id } });
    if (!findOwner) {
        return (response = {
        success: false,
        message: "Usuario no encontrado.",
        });
    }
  // verificamos que llega por lo menos un valor que se actualize.
    if (
        !(
        name ||
        surName ||
        zipcode ||
        city ||
        email ||
        address ||
        role ||
        phone ||
        photo
        )
    ) {
        return (response = {
        success: false,
        message: "Por favor, especifica la información que deseas actualizar.",
        });
    }
  // actualizamos la información en la base de datos
    const updatedOwner = await Owners.update(
        {
            name: name ? name : findOwner.name,
            surName: surName ? surName : findOwner.surName,
            zipcode: zipcode ? zipcode : findOwner.zipcode,
            city: city ? city : findOwner.city,
            email: email ? email : findOwner.email,
            address: address ? address : findOwner.address,
            role: role ? role : findOwner.role,
            phone: phone ? phone : findOwner.phone,
            photo: photo ? photo : findOwner.photo,
        },
        {
            where: { id },
        }
    );
    return (response = {
        success: true,
        message: "Datos actualizados correctamente.",
        updatedOwner,
    });
};

module.exports = { updateOwner };

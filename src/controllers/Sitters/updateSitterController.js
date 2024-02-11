const { DogSitters } = require("../../db");

const updateSitter = async ({
    id,
    name,
    surName,
    phone,
    description,
    dateOfBirth,
    role,
    email,
    address,
    zipcode,
    city,
    rates,
    availability,
    photos,
    pay,}) => {
        // verificamos que llega un valor id.
        if (!id) {
        return (response={
            success: false,
            message: "Por favor, proporciona un ID válido.",
        });
        }
        // verificamos que exista un usuario que corresponda a esa id
        const findSitter = await DogSitters.findOne({ where: { id } });
        if (!findSitter) {
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
                phone ||
                description ||
                dateOfBirth ||
                role ||
                email ||
                address ||
                zipcode ||
                city ||
                rates ||
                availability ||
                photos ||
                pay
            )
        ) {
            return (response = {
            success: false,
            message: "Por favor, especifica la información que deseas actualizar."
            });
        }
        // actualizamos la información en la base de datos
        const updatedSitter = await DogSitters.update({
            name: name ? name : findSitter.name,
            surName: surName ? surName : findSitter.surName,
            phone: phone ? phone : findSitter.phone,
            description: description ? description : findSitter.description,
            dateOfBirth: dateOfBirth ? dateOfBirth : findSitter.dateOfBirth,
            role: role ? role : findSitter.role,
            email: email ? email : findSitter.email,
            address: address ? address : findSitter.address,
            zipcode: zipcode ? zipcode : findSitter.zipcode,
            address: address ? address : findSitter.address,
            rates: rates ? rates : findSitter.rates,
            availability: availability ? availability : findSitter.availability,
            photos: photos ? photos : findSitter.photos,
            pay: pay ? pay : findSitter.pay,
        },
        {
            where: { id }
        });
        return response = {
            success : true,
            message : "Datos actualizados correctamente.",
            updatedSitter
        }
};

module.exports = {updateSitter}

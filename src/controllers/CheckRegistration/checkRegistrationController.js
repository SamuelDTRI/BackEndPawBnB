const { response } = require("express");
const { Owners, DogSitters } = require("../../db");

const checkRegistration = async (email) => {
    try {
        let user = await Owners.findOne({
            where: { email },
        });
        if(!user){
            user = await DogSitters.findOne({ where: { email } });
        }
        if(user){
            console.log("userExist")
            return {
                exist: true,
                userId: user.dataValues.id,
                userRole: user.dataValues.role
            };
        } else {
            console.log("userNotExist")
            return {
                exist: false,
                userId: null,
                userRole: null,
            };
        }
    } catch (error) {
        throw new Error(
        "Error al verificar el estado de registro del usuario:",
        error
        );
    }
};

module.exports = {
    checkRegistration
};

const { response } = require("express");
const { Owners, DogSitters } = require("../../db");

const checkRegistration = async (email) => {
<<<<<<< HEAD
  try {
    let user = await Owners.findOne({
      where: { email },
    });
    if (!user) {
      user = await DogSitters.findOne({ where: { email } });
=======
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
                checkId: user.dataValues.id,
                checkRole: user.dataValues.role,
                checkDeleted: user.dataValues.deleted
            };
        } else {
            console.log("userNotExist")
            return {
                exist: false,
                checkId: null,
                checkRole: null,
                checkDeleted: null
            };
        }
    } catch (error) {
        throw new Error(
        "Error al verificar el estado de registro del usuario:",
        error
        );
>>>>>>> 5bd336d9408e9952bbc62f9ff17b5c5fcdbe759e
    }
    if (user) {
      console.log("userExist");
      return {
        exist: true,
        checkId: user.dataValues.id,
        checkRole: user.dataValues.role,
      };
    } else {
      console.log("userNotExist");
      return {
        exist: false,
        checkId: null,
        checkRole: null,
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
  checkRegistration,
};

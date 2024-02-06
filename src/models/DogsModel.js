const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      race: { //raza
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: { //genero
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feedingInstructions: { //instrucciones de alimentacion
        type: DataTypes.STRING,
        allowNull: false,
      },
      allergies: { //alergias
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicines: { //medicinas
        type: DataTypes.STRING,
        allowNull: true,
      },
      medicalCondition: { //condicion medica
        type: DataTypes.STRING,
        allowNull: false,
      },
      behavior: { //comportamiento
        type: DataTypes.STRING,
        allowNull: false,
      },
      vaccination: { //vacunacion
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      breed: {
        //raza
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        //genero
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      feedingInstructions: {
        //instrucciones de alimentacion
        type: DataTypes.TEXT,
        allowNull: false,
      },
      allergies: {
        //alergias
        type: DataTypes.STRING,
        allowNull: false,
      },
      medication: {
        //medicinas
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicalCondition: {
        //condicion medica
        type: DataTypes.STRING,
        allowNull: false,
      },
      vaccination: {
        //vacunacion
        type: DataTypes.STRING,
        allowNull: false,
      },
      behavior: {
        //comportamiento
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    ownerId: {
      type: DataTypes.UUID,
      allowNull: true
    }
    },
    
    { timestamps: false, freezeTableName: true }
  );
};

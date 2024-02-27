const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DogSitters",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photoProfile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING, //! LO CAMBIA A STRING DE INTERGER
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          notEmpty: {
            args: true, // Esto es para que la descripción no este en blanco/vació
            msg: "Description cannot be empty",
          },
        },
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("Owner", "DogSitter"),
        defaultValue: "DogSitter",
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        //dirección
        type: DataTypes.STRING,
        allowNull: true,
      },
      neighborhood: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        defaultValue: "CABA"
      },
      rates: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};


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
        allowNull: false,
      },
      photoProfile: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING, //! LO CAMBIA A STRING DE INTERGER
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          notEmpty: {
            args: true, // Esto es para que la descripcion no este en blaco/vacio
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
        allowNull: false,
      },
      address: {
        //direccion
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
        type: DataTypes.STRING,
        allowNull: true,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
      pay: {
        type: DataTypes.STRING,
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


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
      photoProfile: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true, // Esto es para que la descripcion no este en blaco/vacio
            msg: "Description cannot be empty",
          },
        },
      },
      dateOfBirth: {
        //fecha de nacimiento
        type: DataTypes.DATEONLY,
        allowNull: false,
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
        allowNull: false,
      },
      Neighborhood: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rates: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photos: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
      },
      pay: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};

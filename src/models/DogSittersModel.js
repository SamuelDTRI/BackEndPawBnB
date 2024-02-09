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
            args: true, // Esto es para que la descripción no este en blanco/vació
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
        //dirección
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcode: {
        //código postal
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rates: {
        //tarifas
        type: DataTypes.STRING,
        allowNull: true,
      },
      availability: {
        type: DataTypes.ARRAY(DataTypes.DATEONLY),
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
    },
    { timestamps: false, freezeTableName: true }
  );
};

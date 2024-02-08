const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Owners",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
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
        type: DataTypes.TEXT,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("owner", "dogSitter"),
        defaultValue: "owner",
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photo: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};

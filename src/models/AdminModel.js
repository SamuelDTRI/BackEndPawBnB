const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Admin",
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
      surName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("Admin"),
        defaultValue: "Admin",
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
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bookings",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(
          "pendiente",
          "aprobado",
          "activo",
          "cancelado",
          "completado"
        ),
      },
      reviews: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
};

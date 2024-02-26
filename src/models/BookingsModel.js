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
        allowNull: true,
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      dateCheckIn:{
        type: DataTypes.DATE,
        allowNull: true
      },
      dateCheckOut: {
        type: DataTypes.DATE,
        allowNull: true
      },
      entryTime: {
        type: DataTypes.TIME,
        allowNull: true
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      dogId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      dogSitterId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      ownerId: {
        type: DataTypes.UUID,
        allowNull: false
      }     
    },
    { timestamps: true, freezeTableName: true }
  );
};

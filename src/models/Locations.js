const  { DataTypes } =require("sequelize");

const  { sequelize } = require("../db.js");

const Locations = sequelize.define(
    "Locations",
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        locationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        latitude: {
        type: DataTypes.REAL,
        allowNull: false,
        },
        longitude: {
        type: DataTypes.REAL,
        allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports= Locations;

require("dotenv").config();
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, NODE_ENV } = process.env;
const BookingsModel = require("./models/BookingsModel");
const DogSittersModel = require("./models/DogSittersModel");
const DogsModel = require("./models/DogsModel");
const OwnersModel = require("./models/OwnersModel");
const LocationsModel = require("./models/LocationsModel.js");
const { Sequelize } = require("sequelize");
const AdminModel = require("./models/AdminModel.js");

let sequelize =
  // process.env.NODE_ENV === "production"
  //   ? new Sequelize({
  //       database: "railway",
  //       username: "postgres",
  //       password: "bdaBGF66ffGg5ecB3**6B-Ag54EfAC4c",
  //       host: "viaduct.proxy.rlwy.net",
  //       port: 11376,
  //       dialect: "postgres",
  //       dialectOptions: {
  //         ssl: {
  //           require: true,
  //           rejectUnauthorized: false,
  //         },
  //       },
  //       logging: false,
  //       native: false,
  //     })
  //   :
  new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
  });

BookingsModel(sequelize);
DogSittersModel(sequelize);
DogsModel(sequelize);
OwnersModel(sequelize);

LocationsModel(sequelize);
AdminModel(sequelize)

const { Bookings, DogSitters, Dogs, Owners, Locations, Admin } = sequelize.models;

//-------------------------------------------------------------------------------------------------
// Owners And Dogs
Owners.hasMany(Dogs, { foreignKey: "ownerId" });
Dogs.belongsTo(Owners, { foreignKey: "ownerId" });

//-------------------------------------------------------------------------------------------------
// Owners And Bookings
Owners.hasMany(Bookings, { foreignKey: "ownerId" });
Bookings.belongsTo(Owners, { foreignKey: "ownerId" });

//-------------------------------------------------------------------------------------------------
// Dogsitters And Bookings
DogSitters.hasMany(Bookings, { foreignKey: "dogSitterId" });
Bookings.belongsTo(DogSitters, { foreignKey: "dogSitterId" });

//-------------------------------------------------------------------------------------------------
// Owners Dogsitters Favorites
Owners.belongsToMany(DogSitters, { through: "Favorites", as: "favorites" });
DogSitters.belongsToMany(Owners, { through: "Favorites" });

module.exports = { sequelize, Bookings, DogSitters, Dogs, Owners, Locations, Admin };



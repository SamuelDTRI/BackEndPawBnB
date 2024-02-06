require("dotenv").config();
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, NODE_ENV } = process.env;
const BookingsModel = require("./models/BookingsModel");
const DogSittersModel = require("./models/DogSittersModel");
const DogsModel = require("./models/DogsModel");
const OwnersModel = require("./models/OwnersModel");
const { Sequelize } = require("sequelize");

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: "railway",
        username: "postgres",
        password: "bdaBGF66ffGg5ecB3**6B-Ag54EfAC4c",
        host: "viaduct.proxy.rlwy.net",
        port: 11376,
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
        native: false,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false,
          native: false,
        }
      );

BookingsModel(sequelize);
DogSittersModel(sequelize);
DogsModel(sequelize);
OwnersModel(sequelize);

const { Bookings, DogSitters, Dogs, Owners } = sequelize.models;

//-------------------------------------------------------------------------------------------------
// Owners And Dogs
Owners.belongsToMany(Dogs, { through: "Owners_Dogs" });
Dogs.belongsToMany(Owners, { through: "Owners_Dogs" });

//-------------------------------------------------------------------------------------------------
// Owners And Bookings
Owners.belongsToMany(Bookings, { through: "Owners_bookings" });
Bookings.belongsToMany(Owners, { through: "Owners_Bookings" });

//-------------------------------------------------------------------------------------------------
// Dogsitters And Bookings
DogSitters.belongsToMany(Bookings, { through: "sitters_Bookings" });
Bookings.belongsToMany(DogSitters, { through: "sitters_Bookings" });

//-------------------------------------------------------------------------------------------------
// Owners Dogsitters Favorites
// Owners.hasMany(Dogsitters, { foreignKey: "DogsittersId", as: "favorites" })

module.exports = { sequelize, Bookings, DogSitters, Dogs, Owners };

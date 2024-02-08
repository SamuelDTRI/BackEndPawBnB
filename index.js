require("dotenv").config();
const { sequelize } = require("./src/db");
const { server } = require("./src/server");

console.log("Is sequelize an instance of Sequelize?", sequelize instanceof require("sequelize"));

sequelize.sync({ alter: true }).then(
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  })
);
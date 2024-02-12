const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { mainRouter } = require("./routes/mainRouter");

const server = express();
server.use(morgan("dev"));
server.use(express.json({ limit: '50mb'})); 
server.use(express.urlencoded({ extended: true, limit: '50mb'})); 
/*express.json() se utiliza para analizar datos en formato JSON, 
mientras que express.urlencoded() se utiliza para analizar datos 
codificados en URL.  */

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
server.use(cors(corsOptions));

server.use("/", mainRouter);

module.exports = { server };

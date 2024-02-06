const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json("ok");
});

module.exports = { mainRouter };

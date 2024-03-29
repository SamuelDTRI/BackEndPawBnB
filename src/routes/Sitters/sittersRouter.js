const { Router } = require("express");
const {
  getAllSittersHandler,
} = require("../../handlers/Sitters/getAllSittersHandler");
const {
  createSittersHandler,
} = require("../../handlers/Sitters/createSittersHandler");
const {
  updateSitterHandler,
} = require("../../handlers/Sitters/updateSitterHandler");
const {
  getSitterByIdHandler,
} = require("../../handlers/Sitters/getSitterByIdHandler");
const {
  updateDeletedSittersHandler,
} = require("../../handlers/Sitters/updateDeletedSittersHandler");
const {
  deleteSittersHandler,
} = require("../../handlers/Sitters/deleteSittersHandler");
const { 
  deletePhotoHandler 
} = require("../../handlers/Sitters/deletePhotoHanlder");


const sittersRouter = Router();

sittersRouter.get("/", getAllSittersHandler);
sittersRouter.get("/:id", getSitterByIdHandler);
sittersRouter.post("/", createSittersHandler);
sittersRouter.put("/:id", updateSitterHandler);
sittersRouter.put("/delete/:id", updateDeletedSittersHandler);
sittersRouter.delete("/:id", deleteSittersHandler);

// Nueva ruta para eliminar una foto específica del cuidador
sittersRouter.delete("/:id/photos/:index", deletePhotoHandler);

module.exports = { sittersRouter };


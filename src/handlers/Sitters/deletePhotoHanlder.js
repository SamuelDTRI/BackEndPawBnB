const { 
    deletePhotoController 
} = require("../../controllers/Sitters/deletePhotoController");


const deletePhotoHandler = async (req, res) => {
    const {id, index} = req.params;
    console.log(`Este es el id: ${id}`);
    console.log(`Este es el index: ${index}`);

    try{
        const response = await deletePhotoController(id, index);
        res.status(200).json(response);
    } catch(error) {
        console.error("Error al eliminar la foto del cuidador:", error);
        res.status(500).json({ message: "Error del servidor" });
    }

}
module.exports = { deletePhotoHandler };
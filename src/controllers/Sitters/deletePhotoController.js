const { DogSitters } = require("../../db")

const deletePhotoController = async (id, index) => {
    try {
        const sitter = await DogSitters.findOne({ where: {id} });

        if(!sitter) return new Error("Cuidador no encontrado");

        const updatedPhotos = sitter.photos.filter((photo, i) => i !== parseInt(index));

        await DogSitters.update({ photos: updatedPhotos }, { where: {id} });
        return { success: true, message: "Foto eliminada con éxito" };
    } catch (error) {
        console.error("Error al eliminar la foto del cuidador:", error);
        return { success: false, message: "Error al eliminar la foto del cuidador" };
    };
};

module.exports = { deletePhotoController };
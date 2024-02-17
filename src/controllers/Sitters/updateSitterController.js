require("dotenv").config();
const { DogSitters } = require("../../db");
const cloudinary = require("../../../cloudinary");

const updateSitter = async ({
  id,
  name,
  surName,
  phone,
  description,
  dateOfBirth,
  email,
  password,
  address,
  neighborhood,
  city,
  rates,
  photos,
  photoProfile,
}) => {
  console.log("Datos recibidos en updateSitter:", {
    id,
    name,
    surName,
    phone,
    description,
    dateOfBirth,
    email,
    password,
    address,
    neighborhood,
    city,
    rates,
  });

  // verificamos que llega un valor id.
  if (!id) {
    throw new Error("Por favor, proporciona un ID válido.");
  }
  // verificamos que exista un usuario que corresponda a esa id
  const findSitter = await DogSitters.findOne({ where: { id } });
  console.log("Sitter encontrado en la base de datos:", findSitter); // Agregar este log
  if (!findSitter) {
    throw new Error("No coincide el id con un sitter");
  }
  // verificamos que llega por lo menos un valor que se actualize.
  if (
    !(
      name ||
      surName ||
      phone ||
      description ||
      dateOfBirth ||
      email ||
      password ||
      address ||
      neighborhood ||
      city ||
      photos ||
      photoProfile ||
      rates
    )
  ) {
    throw new Error(
      "Por favor, especifica la información que deseas actualizar."
    );
  }

  const updatedFields = {
    name: name || findSitter.name,
    surName: surName || findSitter.surName,
    phone: phone || findSitter.phone,
    description: description || findSitter.description,
    dateOfBirth: dateOfBirth || findSitter.dateOfBirth,
    email: email || findSitter.email,
    password: password || findSitter.password,
    address: address || findSitter.address,
    neighborhood: neighborhood || findSitter.neighborhood,
    city: city || findSitter.city,
    rates: rates || findSitter.rates,
    photoProfile: findSitter.photoProfile,
    photos: findSitter.photos,
  };

  // Si existe photoProfile:
  if (photoProfile) {
    const uploadedProfileImg = await cloudinary.uploader.upload(photoProfile, {
      upload_preset: "PawBnB_Profile",
      public_id: `${name}_imgProfile`,
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });
    //const profileurl = uploadedProfileImg.secure_url;

    // const imgsArray = findSitter.photoProfile || [];
    // const addIndex = imgsArray.length;

    // const updatePhotoIndex = [...imgsArray, {index: addIndex, url: profileurl}];

    updatedFields.photoProfile = [uploadedProfileImg.secure_url];
  }

  // Si existe photos
  if (photos) {
    const uploadedGallery = await cloudinary.uploader.upload(photos, {
      upload_preset: "PawBnB_Gallery",
      public_id: `${name}_Gallery`,
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    const galleryURL = uploadedGallery.secure_url;

    const imgsArray = findSitter.photos || [];
    //const addIndex = imgsArray.length;

    const updatePhotosIndex = [...imgsArray, { original: galleryURL }];

    updatedFields.photos = updatePhotosIndex;
  }

  // Actualizar el cuidador en la base de datos
  const updatedSitter = await DogSitters.update(updatedFields, {
    where: { id },
  });
  console.log("Cuidador actualizado:", updatedSitter);
  return updatedSitter;
};

module.exports = { updateSitter };

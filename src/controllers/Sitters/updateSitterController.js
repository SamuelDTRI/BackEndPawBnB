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
  photoProfile
}) => {
  console.log("Datos recibidos en updateSitter:", { id, name, surName, phone, description, dateOfBirth, email, password, address, neighborhood, city, rates })
  
  // verificamos que llega un valor id.
  if (!id) {
    throw new Error("No se encontro un sitter con ese id");
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

 
  // Si existe photos:
  if(photos && !photoProfile){
    //Se sube la img a cloudinary y te devuelve la url unicamente
    const uploadedGallery = await cloudinary.uploader.upload(photos, {
      upload_preset: "PawBnB_Gallery",
      public_id: `${name}_imgProfile`, 
      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
    });

    const saveURL = uploadedGallery.secure_url;

    const updateGallery = {
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
      photos: findSitter.photos
    }

    if (updateGallery.photos.length >= 0){
      updateGallery.photos.push(saveURL);
    } else{
      updateGallery.photos = [uploadedGallery.secure_ur];
    }
    
    const updateSitterGallery = await DogSitters.update(updateGallery, { where: { id } });
    console.log("Cuidador actualizado:", updateSitterGallery);

    return updateSitterGallery;
    
  };

  
  // Si existe photos:
  if(photoProfile && !photos){
    //Se sube la img a cloudinary y te devuelve la url unicamente
    const uploadedPhoto = await cloudinary.uploader.upload(photos, {
      upload_preset: "PawBnB_Profile",
      public_id: `${name}_imgProfile`, 
      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
    });

    const saveURL = uploadedPhoto.secure_url;

    const updatePhotoProfile = {
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
      photos: findSitter.photos
    }

    if (updatePhotoProfile.photoProfile.length >= 0){
      updatePhotoProfile.photoProfile.push(saveURL);
    } else{
      updatePhotoProfile.photoProfile = [uploadedPhoto.secure_ur];
    }
    
    const updateSitterPhoto = await DogSitters.update(updatePhotoProfile, { where: { id } });
    console.log("Cuidador actualizado:", updateSitterPhoto);

    return updateSitterPhoto;
    
  };

  if(photoProfile && photos){
    //Se sube la img a cloudinary y te devuelve la url unicamente
    const uploadedPhoto = await cloudinary.uploader.upload(photos, {
      upload_preset: "PawBnB_Profile",
      public_id: `${name}_imgProfile`, 
      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
    });

    const saveURL = uploadedPhoto.secure_url;

    const uploadedGallery = await cloudinary.uploader.upload(photos, {
      upload_preset: "PawBnB_Gallery",
      public_id: `${name}_imgProfile`, 
      allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
    });

    const saveURLGallery = uploadedGallery.secure_url;

    const updatePhotoProfile = {
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
      photos: findSitter.photos
    }

    if (updatePhotoProfile.photoProfile.length >= 0){
      updatePhotoProfile.photoProfile.push(saveURL);
    } else{
      updatePhotoProfile.photoProfile = [uploadedPhoto.secure_ur];
    }

    if (updateGallery.photos.length >= 0){
      updateGallery.photos.push(saveURLGallery);
    } else{
      updateGallery.photos = [uploadedGallery.secure_ur];
    }
    
    
    const updateSitterPhoto = await DogSitters.update(updatePhotoProfile, { where: { id } });
    console.log("Cuidador actualizado:", updateSitterPhoto);

    return updateSitterPhoto;
    
  };

  const updateSitter = {
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
      photos: findSitter.photos
    }

  const updateSitterValues = await DogSitters.update(updateSitter, { where: { id } });
  console.log("Cuidador actualizado:", updateSitterValues);

  return updateSitterValues;


};

module.exports = { updateSitter };

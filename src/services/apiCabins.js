import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = hasImagePath
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1. Create/edit cabin

  let query = supabase.from("cabins");

  //A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  //2.Upload image //https://snxksbzdaykibwprwxow.supabase.co/storage/v1/object/public/cabin-images/...

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    //3.Delete cabin if error uploading

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and cabin was not created"
      );
    }
  }

  return data;
}

export async function deleteCabin(id) {
  //1.Retrieve the cabin record

  const { data: cabinData, error: cabinError } = await supabase
    .from("cabins")
    .select("image")
    .eq("id", id)
    .single();

  console.log("cabin data:", cabinData);
  if (cabinError) {
    console.log(cabinError);
    throw new Error("Could not find cabin to delete");
  }

  //2. Delete cabin
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  //3. Delete image from bucket

  if (cabinData?.image) {
    // Remove the base URL to get just the filename
    const imageFilename = cabinData.image.replace(
      `${supabaseUrl}/storage/v1/object/public/cabin-images/`,
      ""
    );

    // If we have an image filename, proceed to delete the image from storage
    if (imageFilename) {
      const { error: imageDeleteError } = await supabase.storage
        .from("cabin-images")
        .remove([imageFilename]);

      if (imageDeleteError) {
        console.error(
          `Image could not be deleted: ${imageFilename}`,
          imageDeleteError
        );
        throw new Error("Image could not be deleted");
      } else {
        console.log(`Image deleted successfully: ${imageFilename}`);
      }
    } else {
      console.log("No valid image filename to delete");
    }
  } else {
    console.log("No image to delete");
  }
  return data;
}

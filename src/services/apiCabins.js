import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async createcabit(NewCabin){
  
const { data, error } = await supabase
.from('cabins')
.insert([
  { some_column: 'someValue', other_column: 'otherValue' },
])
.select()

if(error){
  console.error(error);
  throw new Error("Cabin could not be created");
}

}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

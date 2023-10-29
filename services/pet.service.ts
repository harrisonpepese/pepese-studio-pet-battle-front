import fetcher from "./fetch.service";

export async function getAllPets() {
  const res = await fetcher.get("pets");
}

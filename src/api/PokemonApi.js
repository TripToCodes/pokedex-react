import axios from "axios";

export const getPokemonsApi = async () =>
  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5");

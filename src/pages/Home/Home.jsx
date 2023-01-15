import React, { useEffect, useState } from "react";
import { getPokemonsApi } from "../../api/PokemonApi";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonsApi()
      .then((res) => {
        // console.log("pokemons' name and details api:", res.data.results);
        const pokemonApis = res.data.results.map((pokemon) => pokemon.url);

        // const fetchedPokemons = [];
        // pokemonApis.forEach(
        //   async (pokemonApi) =>
        //     await axios.get(pokemonApi).then((res) => {
        //       // console.log("res.data: ", res.data);
        //       // fetchedPokemons.push(res.data);
        //       setPokemons((pokemons) => [...pokemons, res.data]);
        //     })
        // );
        // setPokemons(fetchedPokemons);

        const requests = pokemonApis.map((url) => axios.get(url));

        axios.all(requests).then((responses) => {
          setPokemons(responses.map((res) => res.data));
        });
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <h1>
      <CardList pokemons={pokemons} />
    </h1>
  );
}

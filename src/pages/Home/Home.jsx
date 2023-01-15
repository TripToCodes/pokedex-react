import React from "react";
import CardList from "../../components/CardList/CardList";
import { useOutletContext } from "react-router-dom";

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [pokemons, setPokemons] = useOutletContext();

  // useEffect(() => {
  //   getPokemonsApi()
  //     .then((res) => {
  //       // console.log("pokemons' name and detail api:", res.data.results);
  //       const pokemonApis = res.data.results.map((pokemon) => pokemon.url);

  //       const requests = pokemonApis.map((url) => axios.get(url));

  //       axios.all(requests).then((responses) => {
  //         setPokemons(responses.map((res) => res.data));
  //       });
  //     })
  //     .catch((err) => console.log("Error:", err));
  // }, []);

  return (
    <h1>
      <CardList pokemons={pokemons} />
    </h1>
  );
}

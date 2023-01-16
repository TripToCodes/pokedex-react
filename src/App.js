import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPokemonsApi } from "../src/api/PokemonApi";
import axios from "axios";

const queryClient = new QueryClient();
const filters = ["all", "collected"];

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState([filters[0]]);

  useEffect(() => {
    getPokemonsApi()
      .then((res) => {
        // console.log("pokemons' name and detail api:", res.data.results);
        const pokemonApis = res.data.results.map((pokemon) => pokemon.url);

        const requests = pokemonApis.map((url) => axios.get(url));

        axios.all(requests).then((responses) => {
          setPokemons(
            responses.map((res) => {
              const fetchedData = res.data;
              fetchedData["status"] = "all";
              // console.log("fetchedData: ", fetchedData);
              return fetchedData;
            })
          );
        });
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleSearch = (text) => {
    const searchedPokemon = pokemons.filter((pokemon) => pokemon.name === text);
    setPokemons(searchedPokemon);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar
        pokemons={pokemons}
        handleSearch={handleSearch}
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <Outlet context={[pokemons, setPokemons, filter]} />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;

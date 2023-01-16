import React from "react";
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";

export default function CardList() {
  // console.log("pokemons at CardList: ", pokemons);
  const [pokemons, setPokemons, filter] = useOutletContext();

  const handleCollect = (collected) => {
    setPokemons(pokemons.map((pokemon) => (pokemon.id === collected.id ? collected : pokemon)));
  };

  const filtered = getFilteredCards(pokemons, filter);

  return (
    <section>
      <ul>
        {filtered.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onCollect={handleCollect} />
        ))}
      </ul>
    </section>
  );
}

function getFilteredCards(pokemons, filter) {
  if (filter === "all") {
    return pokemons;
  }
  return pokemons.filter((pokemon) => pokemon.status === filter);
}

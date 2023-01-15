import React from "react";
import Card from "../Card/Card";

export default function CardList({ pokemons }) {
  console.log("pokemons: ", pokemons);
  return (
    <>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </>
  );
}

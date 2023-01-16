import React from "react";
import Card from "../Card/Card";
import { useOutletContext } from "react-router-dom";
import styles from "./CardList.module.css";

export default function CardList() {
  // console.log("pokemons at CardList: ", pokemons);
  const [pokemons, setPokemons, filter, searched] = useOutletContext();

  const handleCollect = (collected) => {
    setPokemons(pokemons.map((pokemon) => (pokemon.id === collected.id ? collected : pokemon)));
  };

  const filtered = getFilteredCards(pokemons, filter, searched);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onCollect={handleCollect} searched={searched} />
        ))}
      </ul>
    </section>
  );
}

function getFilteredCards(pokemons, filter, searched) {
  if (searched !== null) {
    return pokemons.filter((pokemon) => pokemon.name === searched);
  }
  if (filter === "all") {
    return pokemons;
  }

  return pokemons.filter((pokemon) => pokemon.status === filter);
}

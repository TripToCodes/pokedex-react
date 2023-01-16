/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

export default function CardBackSide({ pokemon, cardStatus }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  useEffect(() => {
    let stats = [];
    pokemon.stats.map((stat) => {
      stats.push([stat.stat.name, stat.base_stat]);
    });
    setPokemonStats(stats);
  }, []);

  useEffect(() => {
    let abilities = "";
    pokemon.abilities.map((ability) => {
      abilities += `${ability.ability.name} `;
    });
    setPokemonAbilities(abilities);
  }, []);

  return (
    <>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} />
      <div>{`weight: ${pokemon.weight}`}</div>
      <div>{`height: ${pokemon.height}`}</div>
      <div>{`Abilities: ${pokemonAbilities}`}</div>
      <div>{`Stats: ${pokemonStats}`}</div>
    </>
  );
}

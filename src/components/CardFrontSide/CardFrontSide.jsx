/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

export default function CardFrontSide({ pokemon, cardStatus, onCollect }) {
  const [pokemonTypes, setPokemonTypes] = useState("");
  const { id, name, status } = pokemon;

  useEffect(() => {
    let types = "";
    pokemon.types.map((type) => {
      types += `${type.type.name} `;
    });
    setPokemonTypes(types);
  }, []);

  const handleChange = (e) => {
    const status = e.target.checked ? "collected" : "all";
    onCollect({ ...pokemon, status });
  };

  return (
    <div>
      <input type="checkbox" id={id} checked={status === "collected"} onChange={handleChange} />
      <div>{name}</div>
      <img src={pokemon.sprites.back_default} />
      <div>{pokemonTypes}</div>
    </div>
  );
}

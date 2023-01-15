/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

export default function CardFrontSide({ pokemon }) {
  const [pokemonTypes, setPokemonTypes] = useState("");

  useEffect(() => {
    let types = "";
    pokemon.types.map((type) => {
      types += `${type.type.name} `;
    });
    setPokemonTypes(types);
  }, []);

  return (
    <div>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.back_default} />
      <div>{pokemonTypes}</div>
    </div>
  );
}

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./CardFrontSide.module.css";

export default function CardFrontSide({ pokemon, onFlipChange, cardStatus }) {
  const [pokemonTypes, setPokemonTypes] = useState("");
  const { name, weight, height } = pokemon;

  useEffect(() => {
    let types = "";
    pokemon.types.map((type) => {
      types += `${type.type.name} `;
    });
    setPokemonTypes(types);
  }, []);

  const handleClick = () => {
    onFlipChange(!cardStatus);
  };

  return (
    <div className={styles.card__front}>
      <h3 className={styles.pokemon__name}>{name}</h3>
      <div className={styles.pokemon__types}>{pokemonTypes}</div>
      <img
        className={styles.pokemon__image}
        src={pokemon.sprites.back_default}
        onClick={handleClick}
      />
      <div className={styles.pokemon__weight}>{`weight: ${weight}`}</div>
      <div className={styles.pokemon__height}>{`height: ${height}`}</div>
    </div>
  );
}

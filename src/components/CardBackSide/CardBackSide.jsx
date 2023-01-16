/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./CardBackSide.module.css";

export default function CardBackSide({ pokemon, cardStatus, onFlipChange, onCollect }) {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const { id, name, status } = pokemon;

  useEffect(() => {
    let stats = [];
    pokemon.stats.map((stat) => {
      stats.push([stat.stat.name, stat.base_stat]);
    });
    setPokemonStats(stats);
  }, []);

  useEffect(() => {
    const abilities = pokemon.abilities.map((ability) => ability.ability.name);
    setPokemonAbilities(abilities);
  }, []);

  const handleClick = () => {
    onFlipChange(!cardStatus);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? "collected" : "all";
    onCollect({ ...pokemon, status });
  };

  return (
    <div className={styles.card__back}>
      <div className={styles.card__body}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id}
          checked={status === "collected"}
          onChange={handleChange}
        />
        <label htmlFor={id} className={styles.text}>
          Collect
        </label>
        <h3 className={styles.pokemon__name}>{name}</h3>
        <img
          className={styles.pokemon__image}
          src={pokemon.sprites.front_default}
          onClick={handleClick}
        />
        <div className={styles.pokemon__abilities}>{`Abilities: ${pokemonAbilities}`}</div>
        <div className={styles.pokemon__stats}>{`Stats: ${pokemonStats}`}</div>
      </div>
    </div>
  );
}

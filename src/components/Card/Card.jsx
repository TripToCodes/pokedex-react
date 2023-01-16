import React from "react";
import CardBackSide from "../CardBackSide/CardBackSide";
import CardFrontSide from "../CardFrontSide/CardFrontSide";
import styles from "./Card.module.css";

export default function Card({ pokemon, onCollect }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <CardBackSide pokemon={pokemon} onCollect={onCollect} />
        <CardFrontSide pokemon={pokemon} />
      </div>
    </div>
  );
}

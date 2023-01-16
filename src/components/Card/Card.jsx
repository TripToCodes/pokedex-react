import React from "react";
import CardBackSide from "../CardBackSide/CardBackSide";
import CardFrontSide from "../CardFrontSide/CardFrontSide";
import styles from "./Card.module.css";

export default function Card({ pokemon, onCollect }) {
  // const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <CardBackSide
          pokemon={pokemon}
          // cardStatus={flipped}
          // onFlipChange={(cardStatus) => setFlipped(cardStatus)}
          onCollect={onCollect}
        />
        <CardFrontSide
          pokemon={pokemon}
          // cardStatus={flipped}
          // onFlipChange={(cardStatus) => setFlipped(cardStatus)}
        />
      </div>
    </div>
  );
}

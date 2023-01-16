import React, { useState } from "react";
import CardBackSide from "../CardBackSide/CardBackSide";
import CardFrontSide from "../CardFrontSide/CardFrontSide";

export default function Card({ pokemon, onCollect }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {flipped ? (
        <CardBackSide
          pokemon={pokemon}
          cardStatus={flipped}
          onFlipChange={(cardStatus) => setFlipped(cardStatus)}
          onCollect={onCollect}
        />
      ) : (
        <CardFrontSide
          pokemon={pokemon}
          cardStatus={flipped}
          onFlipChange={(cardStatus) => setFlipped(cardStatus)}
          onCollect={onCollect}
        />
      )}
    </>
  );
}

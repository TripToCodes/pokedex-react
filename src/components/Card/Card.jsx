import React, { useState } from "react";
import CardBackSide from "../CardBackSide/CardBackSide";
import CardFrontSide from "../CardFrontSide/CardFrontSide";
// import CardFrontSide from "../CardFrontSide/CardFrontSide";

export default function Card({ pokemon }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {flipped ? (
        <CardBackSide pokemon={pokemon} onClick={() => setFlipped(!flipped)} />
      ) : (
        <CardFrontSide pokemon={pokemon} />
      )}
    </>
  );
}

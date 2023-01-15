import React from "react";

export default function Card({ pokemon }) {
  // console.log("pokemon: ", pokemon);
  return <div>{`이름은 ${pokemon.name}이고 몸무게는 ${pokemon.weight}입니다.`}</div>;
}

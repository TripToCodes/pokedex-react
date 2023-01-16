import React from "react";

export default function Stats({ pokemonStats }) {
  return (
    <>
      <div>Stats:</div>
      {pokemonStats.map((stat) => {
        return <div key={stat.name}>{`${stat.name}: ${stat.base_stat}`}</div>;
      })}
    </>
  );
}

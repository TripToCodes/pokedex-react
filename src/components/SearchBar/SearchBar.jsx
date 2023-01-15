import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   filterPokemons()
  // }, [text])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button>
        <FiSearch />
      </button>
    </form>
  );
}

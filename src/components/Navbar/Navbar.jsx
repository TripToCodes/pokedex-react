import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ pokemons, handleSearch, filters, filter, onFilterChange }) {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearch = (pokemon) => {
    setText(pokemon);
    setDisplay(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch(text);
  };
  return (
    <header>
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div ref={wrapperRef}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onClick={() => setDisplay(!display)}
            placeholder="Search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          {display && (
            <div className="autoContainer">
              {pokemons
                .filter(({ name }) => name.indexOf(text.toLowerCase()) > -1)
                .map((value, i) => {
                  return (
                    <div
                      onClick={() => updateSearch(value.name)}
                      className="option"
                      key={i}
                      tabIndex="0"
                    >
                      <span>{value.name}</span>
                    </div>
                  );
                })}
            </div>
          )}
          <button>
            <FiSearch />
          </button>
        </form>
      </div>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

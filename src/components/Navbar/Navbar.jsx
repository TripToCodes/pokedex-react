/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import styles from "./Navbar.module.css";
import pokeball from "../../assets/pokeball.png";

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
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Link to="/">
            <img src={pokeball} style={{ width: "50px" }} className={styles.logo} />
          </Link>
          <div className={styles.form__container}>
            <form ref={wrapperRef} className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
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
        </div>
      </header>
      <div className={styles.filter__button__container}>
        {filters.map((value, index) => (
          <span key={index}>
            <button className={styles.filter__button} onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

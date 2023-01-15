import React, { useState } from "react";
import { FiArchive } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ handleSearch }) {
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch(text);
  };
  return (
    <nav>
      <Link to="/">
        <div>Logo</div>
      </Link>
      <span>
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
      </span>
      <Link to="/mycards">
        <span>
          <FiArchive />
        </span>
      </Link>
    </nav>
  );
}

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FiArchive } from "react-icons/fi";

export default function Navbar() {
  return (
    <header>
      <div>Logo</div>
      <div>
        <SearchBar />
      </div>
      <div>
        <FiArchive />
      </div>
    </header>
  );
}

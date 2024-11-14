// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'
import { assets } from '../../../assets/assets';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Buscando:", searchTerm); // Aquí puedes manejar la búsqueda
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Algo que buscar..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <button className="search-button">
        <i> <img src={assets.search_icon} alt="" /></i>
      </button>
    </div>
  );
};

export default SearchBar;

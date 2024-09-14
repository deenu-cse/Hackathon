import React, { useState } from 'react';
import './App.css';
import data from './name'

const App = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);


    if (value) {
      const filteredSuggestions = data.filter(item =>
        item.country.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Function to handle click on a suggestion
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.country);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        className="logo"
      />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <button className="search-button">
          <img
            src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
            alt="Search Icon"
          />
        </button>
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

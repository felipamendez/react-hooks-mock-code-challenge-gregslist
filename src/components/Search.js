import React, {useState} from "react";

function Search({onSearchSubmit, searchText, setSearchText}) {
  


  function handleSearchChange(e) {
    setSearchText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearchSubmit()
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

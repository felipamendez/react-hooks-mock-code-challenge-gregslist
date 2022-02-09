import React from "react";
import Search from "./Search";
import Sort from "./Sort"

function Header({onSearchSubmit, searchText, setSearchText, sortBy, setSortBy, onChangeSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} searchText={searchText} setSearchText={setSearchText}/>
      <Sort sortBy={sortBy} setSortBy={setSortBy} onChangeSort={onChangeSort}/>
    </header>
  );
}

export default Header;

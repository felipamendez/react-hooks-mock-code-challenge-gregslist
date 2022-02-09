import React from "react";
import Search from "./Search";

function Header({onSearchSubmit, searchText, setSearchText}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} searchText={searchText} setSearchText={setSearchText}/>
    </header>
  );
}

export default Header;

import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]) 
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
          .then(r => r.json())
        .then(listings => setAllListings(listings))
    }, [])
    
  function onSearchSubmit() {
    console.log("submitApp")
   
    
  }

  const listingsToDisplay= allListings.filter((listing) => {
    return(listing.description.includes(searchText))
    
  })

  console.log(searchText)

  return (
    <div className="app">
      <Header onSearchSubmit={onSearchSubmit} searchText={searchText} setSearchText={setSearchText}/>
      <ListingsContainer allListings={allListings} 
      setAllListings={setAllListings} 
      listingsToDisplay={listingsToDisplay}/>
    </div>
  );
}

export default App;

import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({allListings, setAllListings, listingsToDisplay, onDleteClick}) {

  function onDeleteClick (deletedId) {
    const updatedListings = allListings.filter((listing) => listing.id !== deletedId)
    setAllListings(updatedListings)
    console.log("deleted")
  }

  return (
    <main>
      <ul className="cards">
       {listingsToDisplay.map((listing) => {
         return (<ListingCard 
          listing={listing} 
          image={listing.image}
          description={listing.description} 
          location={listing.location}
          key={listing.id}
          onDeleteClick={onDeleteClick}
          />)
       })}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;

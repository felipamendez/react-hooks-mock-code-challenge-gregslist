import React, {useState} from "react";

function ListingCard({listing, image, description, location, onDeleteClick}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const favoriteClass = isFavorite ? "emoji-button favorite active" : "emoji-button favorite"

  function handleFavoriteClick () {
     setIsFavorite(isFavorite => !isFavorite)
  }
  
  function handleDeleteClick () {
      fetch(`http://localhost:6001/listings/${listing.id}`, {
              method: "DELETE",
          })
    onDeleteClick(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <div className="emoji div" onClick={handleFavoriteClick}>
         {true ? (
          <button className={favoriteClass}>★</button>
          ) : (
          <button className="emoji-button favorite">☆</button>
         )}
        </div>
        <strong>{description}</strong>
        <span> {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

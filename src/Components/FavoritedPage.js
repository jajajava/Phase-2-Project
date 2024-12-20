import React, { useState, useEffect } from "react";
import RemoveFavorite from "./RemoveFavorite";
import Footer from "./Footer";
import Navbar from "./Navbar";

function FavoritedPage({ setRecipeGetter }) {
  const [favorites, setFavorites] = useState([]);
  const [favoritesLoaded, setFavoritesLoaded] = useState(false)

  useEffect(() => {
    fetch("https://caramel-first-verdict.glitch.me/favorited")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data); 
        setFavoritesLoaded(true)}
      );
  }, [favoritesLoaded]);

  return (
    <div>
      <Navbar />
      <div className="results">
      {favoritesLoaded ?
        <div className="resultsContainer">
          {favorites.map((each) => (
            <RemoveFavorite
              key={each.id}
              each={each}
              setRecipeGetter={setRecipeGetter}
            />
          ))}
        </div>
      : <h1 id="loadingRecipes">"Loading recipes..."</h1>}
      {(favoritesLoaded === true && favorites.length === 0) ? <h1 id="noFavorites">No recipes were added to favorites!</h1> : null}
    </div>
    <Footer />
    </div>
  );
}

export default FavoritedPage;

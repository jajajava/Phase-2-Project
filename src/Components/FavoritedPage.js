import React, { useState, useEffect } from "react";
import RemoveFavorite from "./RemoveFavorite";
import Footer from "./Footer";
import Navbar from "./Navbar";

function FavoritedPage({ setRecipeGetter }) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch("https://caramel-first-verdict.glitch.me/favorited")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
    console.log(favorites);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="results">
        <div className="resultsContainer">
          {favorites.map((each) => (
            <RemoveFavorite
              key={each.id}
              each={each}
              setRecipeGetter={setRecipeGetter}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FavoritedPage;

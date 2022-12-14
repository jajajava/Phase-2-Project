import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ each, setRecipeGetter }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(true);
    fetch("https://caramel-first-verdict.glitch.me/favorited", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: each.id,
        title: each.title,
        image: each.image,
      }),
    });
  }

  function handleUnfavorite() {
    setFavorite(false);
    fetch(`https://caramel-first-verdict.glitch.me/favorited/${each.id}`, {
      method: "DELETE",
    });
  }

  const navigate = useNavigate();
  function handleClick() {
    setRecipeGetter(`${each.id}`);
    navigate(`${each.title}`);
  }

  return (
    <div className="cards">
      <img
        className="imageHolder"
        onClick={handleClick}
        src={each.image}
        alt={`Failed to load ${each.title}`}
      />
      <p className="title">
        {each.title}

        {favorite ? (
          <button className="favbtn" onClick={handleUnfavorite}>
            <i className="bx bxs-star"></i>
          </button>
        ) : (
          <button className="favbtn" onClick={handleFavorite}>
            <i className="bx bx-star"></i>
          </button>
        )}
      </p>
    </div>
  );
}

export default RecipeCard;

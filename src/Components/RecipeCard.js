import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ each, setRecipeGetter }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    fetch(
      "https://raw.githubusercontent.com/jajajava/Phase-2-Project/David_React/db.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: `${each.id}`,
          favorite: true,
        }),
      }
    );

    setFavorite(!favorite);
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
          <button className="favbtn" onClick={handleFavorite}>
            <i class="bx bxs-star"></i>
          </button>
        ) : (
          <button className="favbtn" onClick={handleFavorite}>
            <i class="bx bx-star"></i>
          </button>
        )}
      </p>
    </div>
  );
}

export default RecipeCard;

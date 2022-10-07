import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RemoveFavorite({ each, setRecipeGetter }) {
  const [favorite, setFavorite] = useState(true);

  function handleUnfavorite() {
    setFavorite(false);
    fetch(`https://caramel-first-verdict.glitch.me/favorited/${each.id}`, {
      method: "DELETE",
    });
  }

  const navigate = useNavigate();
  function handleClick() {
    setRecipeGetter(`${each.id}`);
    navigate(`${each.name}`);
  }

  return (
    <div>
      {favorite ? (
        <div>
          <img
            className="imageHolder2"
            onClick={handleClick}
            src={each.image}
            alt={`Failed to load ${each.title}`}
          />
          <h4>
            {each.title}
            <i onClick={handleUnfavorite} className="bx bx-trash"></i>
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default RemoveFavorite;

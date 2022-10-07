import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RemoveFavorite({ each, setRecipeGetter }) {
  const [favorite, setFavorite] = useState(true);

  function handleUnfavorite() {
    setFavorite(false);
    fetch(`http://localhost:4000/favorited/${each.id}`, {
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
            onClick={handleClick}
            src={each.image}
            alt={`Failed to load ${each.title}`}
          />
          <h4>
            {each.title}
            <i onClick={handleUnfavorite} class="bx bx-trash"></i>
          </h4>
        </div>
      ) : null}
    </div>
  );
}

export default RemoveFavorite;

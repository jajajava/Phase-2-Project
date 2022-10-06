import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({each, setRecipeGetter}){

const [favorite, setFavorite] = useState(false)

function handleFavorite(){
  setFavorite(true)
    fetch('http://localhost:4000/favorited', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        "id": each.id,
        "title": each.title,
        "image": each.image,
        })
    })


    
}

function handleUnfavorite(){
  setFavorite(false)
    fetch(`http://localhost:4000/favorited/${each.id}`, {
      method: "DELETE"
    })
}


const navigate = useNavigate()
function handleClick(){
    setRecipeGetter(`${each.id}`)
    navigate(`${each.title}`)
   
}


return(
    <div>
      
      <img onClick={handleClick} src={each.image} alt={`Failed to load ${each.title}`} />
      <h4>{each.title}
      
      {favorite ? (
        <button onClick={handleUnfavorite}>⭐️</button>
      ) : (
        <button onClick={handleFavorite}>☆</button>
      )}
      </h4>
    
    </div>
    
)

}


export default RecipeCard
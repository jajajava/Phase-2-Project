import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({each, setRecipeGetter}){

const [favorite, setFavorite] = useState(false)

function handleFavorite(){
    fetch('https://raw.githubusercontent.com/jajajava/Phase-2-Project/David_React/db.json', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        "id": `${each.id}`,
        "favorite": true
    
        })
    })


    setFavorite(!favorite)
}


const navigate = useNavigate()
function handleClick(){
    setRecipeGetter(`${each.id}`)
    navigate(`${each.id}`)
   
}


return(
    <div>
      
      <img onClick={handleClick} src={each.image} alt={`Failed to load ${each.title}`} />
      <h4>{each.title}
      
      {favorite ? (
        <button onClick={handleFavorite}>⭐️</button>
      ) : (
        <button onClick={handleFavorite}>☆</button>
      )}
      </h4>
    
    </div>
    
)

}


export default RecipeCard
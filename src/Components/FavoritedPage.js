import React, {useState, useEffect} from "react";
import RemoveFavorite from "./RecipeCard";

function FavoritedPage({setRecipeGetter}){

    const [favorites, setFavorites] = useState([])
    useEffect(()=>{fetch('http://localhost:4000/favorited')
    .then(res => res.json())
    .then(data => setFavorites(data))
    console.log(favorites)}, [])
return(
    <div>
       {favorites.map((each) =>
         <RemoveFavorite key={each.id} each={each} setRecipeGetter={setRecipeGetter}/>
         )}
    </div>
)


}





export default FavoritedPage
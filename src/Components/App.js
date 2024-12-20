import "../App.css";
import Homepage from "./Homepage";
import Searched from "./Searched";
import NotFound from "./NotFound";
import Recipe from "./Recipe";
import FavoritedPage from "./FavoritedPage";
import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [linkGetter, setLinkGetter] = useState("");
  const [recipeGetter, setRecipeGetter] = useState("");

  //Note: This is to "wake up" the glitch server that's hosting the JSON favorites data
  useEffect(()=>{
    fetch('https://caramel-first-verdict.glitch.me/favorited')
    .then(res => res.json())
    .then(favs => console.log(favs))
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage setLinkGetter={setLinkGetter} />} />
        <Route
          path="/search"
          element={
            <Searched link={linkGetter} setRecipeGetter={setRecipeGetter} />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/search/:id"
          element={<Recipe recipeGetter={recipeGetter} />}
        />
        <Route
          path="/favorites"
          element={<FavoritedPage setRecipeGetter={setRecipeGetter} />}
        />
        <Route
          path="/favorites/:id"
          element={<Recipe recipeGetter={recipeGetter} />}
        />
      </Routes>
    </div>
  );
}

export default App;

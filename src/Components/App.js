import '../App.css';
import Homepage from './Homepage'
import Searched from './Searched'
import NotFound from './NotFound'
import Recipe from './Recipe'
import FavoritedPage from './FavoritedPage';
import {React, useState} from 'react';
import { Routes, Route , } from "react-router-dom"



function App() {
  const [linkGetter, setLinkGetter] = useState("")
  const [recipeGetter, setRecipeGetter] = useState("")
  console.log(linkGetter)
  

  return (
    <div className="App">
      

    <Routes>
      <Route path="/" element={<Homepage setLinkGetter={setLinkGetter} />} />
      <Route path="/search" element={<Searched link={linkGetter} setRecipeGetter={setRecipeGetter}/>} />
      <Route path="*" element={<NotFound />}/>
      <Route path="/search/:id" element={<Recipe recipeGetter={recipeGetter}/>}/>
      <Route path="/favorites" element={<FavoritedPage setRecipeGetter={setRecipeGetter}/>}/>
      <Route path="/favorites/:id" element={<Recipe recipeGetter={recipeGetter}/>}/>
    </Routes>
    
    
    </div>
  );
}

export default App;

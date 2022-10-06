import '../App.css';
import Homepage from './Homepage'
import Searched from './Searched'
import NotFound from './NotFound'
import Recipe from './Recipe'
import FavoritedPage from './FavoritedPage';
import {React, useState} from 'react';
import { Routes, Route, useNavigate , } from "react-router-dom"



function App() {
  const [linkGetter, setLinkGetter] = useState("")
  const [recipeGetter, setRecipeGetter] = useState("")
  console.log(linkGetter)
  
  const navigate = useNavigate()
  function sendHome(e){
    e.preventDefault()
    navigate('/')
  }


  return (
    <div className="App">
    <header>
      <img style={{"cursor": "pointer"}} onClick={sendHome} src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="press here to go home" height="20px" width="20px"/>
      {/* Make this the logo? */}
      {/* <h1 style={{"cursor": "pointer"}} onClick={sendHome}>Cook Compass</h1>*/}
    </header>
      

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

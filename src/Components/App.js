import '../App.css';
import Homepage from './Homepage'
import Searched from './Searched'
import NotFound from './NotFound'
import {React, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom"



function App() {
  const [linkGetter, setLinkGetter] = useState("")
  console.log(linkGetter)

  return (
    <div className="App">
      
    {/* <nav>
    <Link to={"/search"}>Test</Link>
    </nav> */}
    

    <Routes>
      <Route path="/" element={<Homepage setLinkGetter={setLinkGetter} />} />
      <Route path="search" element={<Searched link={linkGetter}/>} />
      <Route path='*' element={<NotFound />}/>
      </Routes>
    
    
    </div>
  );
}

export default App;

// import Link is useful if you want to make a button

//FOR THE REDIRECT FROM BUTTON, YOU MUST USE THE NAVIGATE HOOKS!
//CHECK THIS VIDEO https://www.youtube.com/watch?v=zCgruoRUxlk&ab_channel=TheNetNinja
//AT 6:37
import { React, useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";

function Searched({ link, setRecipeGetter }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${link}`)
      .then((res) => res.json())
      .then((info) => {
        info.results ? setData(info.results) : setData(info.recipes);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <div className="results">
        <div className="resultsContainer">
          {data?.map((each) => (
            <RecipeCard
              key={each.id}
              each={each}
              setRecipeGetter={setRecipeGetter}
            />
          ))}
        </div>
      </div>
      <footer>© 2022 by CookCompass. All rights reserved.</footer>
    </div>
  );
}

export default Searched;

//you can bring the data from homepage, then pass it down as a prop HERE, then break it down with .map(),
//then in a child component make a card for each map (.map(()=> return <Card />))

// * You can make a fetch request with the search, then make another fetch request that will be displayed as a card
// Once you click on the card, take it to the .url

// 'https://raw.githubusercontent.com/jajajava/Phase-2-Project/David_React/db.json'

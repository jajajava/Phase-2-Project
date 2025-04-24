import { React, useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Searched({ link, setRecipeGetter }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch(`${link}`)
      .then((res) => res.json())
      .then((info) => {
        // If info loads correctly, it returns an array called "recipes"
        // Otherwise it returns an array called "results"
        if (info.recipes) {
          setData(info.recipes);
        } else if (info.results) {
          setData(info.results);
        } else {
          setData([]);
        }
      })
      .finally(() => {
        setLoading(false); // Finished loading
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="results">
        <div className="resultsContainer">
        {loading ? (
          <h1>Loading...</h1>
        ) : data?.length > 0 ? (
          data.map((each) => (
            <RecipeCard
              key={each.id}
              each={each}
              setRecipeGetter={setRecipeGetter}
            />
          ))
        ) : (
          <h1>No results</h1>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Searched;
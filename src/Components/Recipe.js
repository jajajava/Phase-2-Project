import { React, useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Recipe({ recipeGetter }) {
  const [recipe, setRecipe] = useState("");
  //{instructions: ""} (this was the old useState content)

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeGetter}/information?${process.env.REACT_APP_KEY}`
    )
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe));
  }, []);
  console.log(recipe);

  return (
    <div className="App">
      <Navbar />
      <div className="recipeCont">
        <div id="info" className="recipediv">
          <h1>{recipe.title}</h1>

          <img
            src={recipe.image}
            alt={`Image of ${recipe.title} failed to load`}
            className="recipeimage"
          />
          <p>Servings: {recipe.servings}</p>
          <p>
            Estimated price per serving: $
            {(recipe.pricePerServing / 100).toFixed(2)}
          </p>
        </div>
        <div id="ingredients" className="recipediv">
          <h2>
            <strong>Ingredients</strong>
          </h2>
          {recipe.extendedIngredients
            ? recipe.extendedIngredients.map((item) => (
                <p key={item.name}>{item.original}</p>
              ))
            : null}
        </div>

        <div id="instructions" className="recipediv">
          <h2>
            <strong>Directions</strong>
          </h2>
          {recipe.analyzedInstructions ? (
            recipe.analyzedInstructions[0].steps.map((item) => (
              <ol>
                {" "}
                <strong>{item.number}.</strong> {item.step}
              </ol>
            ))
          ) : (
            <p>
              {" "}
              We don't have the instructions on this site, but don't worry, we
              have <a href={recipe.sourceUrl}>
                the recipe's original link!
              </a>{" "}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipe;

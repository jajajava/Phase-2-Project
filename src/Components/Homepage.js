import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage({ setLinkGetter }) {
  const [search, setSearch] = useState("");
  let searchNoSpace = search.includes(" ")
    ? search.replaceAll(" ", "%20")
    : search;

  //Search bar
  function handleTyping(e) {
    setSearch(e.target.value);
  }

  //Search category selector
  const [queryType, setQueryType] = useState(true);
  function handleSearch(e) {
    if (e.target.value === "search") {
      setQueryType(true);
    } else if (e.target.value === "exact") {
      setQueryType(false);
    }
  }

  function handleDiet(e) {
    setDietChoice(`&diet=${e.target.value}`);
  }

  function handleIntolerance(e) {
    setIntoleranceChoice(`&intolerances=${e.target.value}`);
  }

  function handleCuisine(e) {
    setCuisineChoice(`&cuisine=${e.target.value}`);
  }

  const [diet, setDiet] = useState(false);
  const [dietChoice, setDietChoice] = useState("&diet=keto");
  const [intolerance, setIntolerance] = useState(false);
  const [intoleranceChoice, setIntoleranceChoice] =
    useState("&intolerances=soy");
  const [cuisine, setCuisine] = useState(false);
  const [cuisineChoice, setCuisineChoice] = useState("&cuisine=african");

  let link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
    process.env.REACT_APP_KEY
  }&number=100&${
    queryType ? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`
  }${diet ? dietChoice : ""}${intolerance ? intoleranceChoice : ""}${
    cuisine ? cuisineChoice : ""
  }`;

  //Fetch request, after data is set

  const navigate = useNavigate();

  //I suppose you don't need to have e.preventDefault with React Router, it redirects you to page 2 which is populated with search
  function handleSubmit(e) {
    e.preventDefault();
    setLinkGetter(link);
    navigate(`/search`);
  }

  //Toggles display for the diet, intolerance & cuisine choices
  const [advFilter, setAdvFilter] = useState(false);

  function handleFilter(e) {
    e.preventDefault();
    setAdvFilter(!advFilter);
  }

  //Make checkboxes that are updated when you select these

  return (
    <div className="App">
      <header className="App-header">
        <img src="cc-logo-trans.png" className="App-logo" alt="logo" />
      </header>

      <div className="searchdiv">
        <form onSubmit={handleSubmit} id="form1">
          <div className="search">
            <input
              className="searchBar"
              type="text"
              onChange={handleTyping}
              placeholder="Find your new favorite meal..."
            />

            <button className="searchbtn" type="submit">
              <i class="bx bx-search"></i>
            </button>
          </div>

          <div className="menus">
            <select id="searchType" className="buttons" onInput={handleSearch}>
              <option selected disabled>
                search type
              </option>
              <option value="search">default</option>
              <option value="exact">match title</option>
              <option value="autocomplete">autocomplete</option>
            </select>

            <button id="random" className="buttons">
              randomize
            </button>

            <button id="filter" className="buttons" onClick={handleFilter}>
              advanced filters
            </button>
          </div>

          <div
            className={`checkcontainer ${
              advFilter === false ? "checkContainerHide" : ""
            }`}
          >
            <p>click an option to filter by...</p>
            <div className="checkitem">
              <label htmlFor="diet">diet</label>
              <input
                onClick={() => {
                  setDiet(!diet);
                }}
                id="diet"
                type="checkbox"
              ></input>
              {diet === true ? (
                <select onInput={handleDiet}>
                  <option value="keto">Keto</option>
                  <option value="gluten free">Gluten free</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="pescatarian">Pescatarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              ) : null}
            </div>
            <div className="checkitem">
              <label htmlFor="intolerances">intolerances</label>
              <input
                onClick={() => {
                  setIntolerance(!intolerance);
                }}
                id="intolerances"
                type="checkbox"
              ></input>
              {intolerance === true ? (
                <select onInput={handleIntolerance}>
                  <option value="soy">Soy</option>
                  <option value="egg">Egg</option>
                  <option value="dairy">Dairy</option>
                  <option value="wheat">Wheat</option>
                  <option value="grain">Grain</option>
                  <option value="peanut">Peanut</option>
                  <option value="gluten">Gluten</option>
                  <option value="sesame">Sesame</option>
                  <option value="seafood">Seafood</option>
                  <option value="sulfite">Sulfite</option>
                  <option value="tree nut">Tree nut</option>
                  <option value="shellfish">Shellfish</option>
                </select>
              ) : null}
            </div>
            <div className="checkitem">
              <label htmlFor="cuisine">cuisine</label>
              <input
                onClick={() => {
                  setCuisine(!cuisine);
                }}
                id="cuisine"
                type="checkbox"
              ></input>
              {cuisine === true ? (
                <select onChange={handleCuisine}>
                  <option value="african">African</option>
                  <option value="american">American</option>
                  <option value="british">British</option>
                  <option value="cajun">Cajun</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="chinese">Chinese</option>
                  <option value="eastern european">Eastern European</option>
                  <option value="european">European</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="greek">Greek</option>
                  <option value="indian">Indian</option>
                  <option value="irish">Irish</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="jewish">Jewish</option>
                  <option value="korean">Korean</option>
                  <option value="latin american">Latin American</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="nordic">Nordic</option>
                  <option value="southern">Southern</option>
                  <option value="spanish">Spanish</option>
                  <option value="thai">Thai</option>
                  <option value="vietnamese">Vietnamese</option>
                </select>
              ) : null}
            </div>
          </div>
        </form>
      </div>
      <footer className="home">
        © 2022 by CookCompass. All rights reserved.
      </footer>
    </div>
  );
}

export default Homepage;

//Replace h1 tag with Homepage's children elements

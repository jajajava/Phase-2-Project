import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Homepage({ setLinkGetter }) {
  const [search, setSearch] = useState("");
  let searchNoSpace = search.includes(" ")
    ? search.replaceAll(" ", "%20")
    : search;

  const navigate = useNavigate();

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

  //! If there are issues with the double API key implementation, just put these back in and remove 
  //! 'buildLink', 'handleSubmit', and 'handleRandom' methods
  // let link = `https://api.spoonacular.com/recipes/complexSearch?${
  //   process.env.REACT_APP_KEY
  // }&number=100&${
  //   queryType ? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`
  // }${diet ? dietChoice : ""}${intolerance ? intoleranceChoice : ""}${
  //   cuisine ? cuisineChoice : ""
  // }`;

  // //I suppose you don't need to have e.preventDefault with React Router, it redirects you to page 2 which is populated with search
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setLinkGetter(link);
  //   navigate(`/search`);
  // }

  // function handleRandom(e) {
  //   e.preventDefault();
  //   setLinkGetter(
  //     `https://api.spoonacular.com/recipes/random?${process.env.REACT_APP_KEY}&number=10`
  //   );
  //   navigate("/search");
  // }

  function buildLink(apiKey) {
    return `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&number=100&${
      queryType ? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`
    }${diet ? dietChoice : ""}${intolerance ? intoleranceChoice : ""}${
      cuisine ? cuisineChoice : ""
    }`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const primaryKey = process.env.REACT_APP_KEY;
    const secondaryKey = process.env.REACT_APP_KEY2;

    const tryFetch = async () => {
      let response = await fetch(buildLink(primaryKey));
      if (!response.ok && response.status === 402) {
        response = await fetch(buildLink(secondaryKey));
      }
  
      if (response.ok) {
        setLinkGetter(response.url);
        navigate(`/search`);
      } else {
        // Optional: handle total failure here
        console.error("Both API keys failed:", response.status);
      }
    };
  
    tryFetch();
  }  

  function handleRandom(e) {
    e.preventDefault();
    const primaryKey = process.env.REACT_APP_KEY;
    const secondaryKey = process.env.REACT_APP_KEY2;
  
    const tryFetch = async () => {
      const primaryLink = `https://api.spoonacular.com/recipes/random?${primaryKey}&number=10`;
      let response = await fetch(primaryLink);
  
      if (!response.ok && response.status === 402) {
        const secondaryLink = `https://api.spoonacular.com/recipes/random?${secondaryKey}&number=10`;
        response = await fetch(secondaryLink);
  
        if (response.ok) {
          setLinkGetter(secondaryLink);
          navigate("/search");
        } else {
          console.error("Both API keys failed:", response.status);
        }
      } else if (response.ok) {
        setLinkGetter(primaryLink);
        navigate("/search");
      } else {
        console.error("Random fetch failed:", response.status);
      }
    };
  
    tryFetch();
  }
  //Toggles display for the diet, intolerance & cuisine choices
  const [advFilter, setAdvFilter] = useState(false);

  function handleFilter(e) {
    e.preventDefault();
    setAdvFilter(!advFilter);
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 id="logoCook">cook<span id="logoCompass">compass</span></h1>
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
              <i className="bx bx-search"></i>
            </button>
          </div>

          <div className="menus">
            <select id="searchType" className="buttons" onInput={handleSearch}>
              <option selected disabled>
                search type
              </option>
              <option value="search">default</option>
              <option value="exact">match title</option>
            </select>

            <button id="random" className="buttons" onClick={handleRandom}>
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
      <Footer />
    </div>
  );
}

export default Homepage;
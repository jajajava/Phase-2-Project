import React, { useState, useEffect } from "react";
// import { Navigate } from 'react-router-dom'

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
  const [searchCategory, setSearchCategory] = useState("complexSearch");

  const [queryType, setQueryType] = useState(true);

  let link = `https://api.spoonacular.com/recipes/${searchCategory}?${
    process.env.REACT_APP_KEY
  }&${queryType ? `query=${searchNoSpace}` : `titleMatch=${searchNoSpace}`}`;

  function handleSelector(e) {
    if (e.target.value === "search") {
      setQueryType(true);
      setSearchCategory("complexSearch");
    } else if (e.target.value === "autocomplete") {
      setQueryType(true);
      setSearchCategory("autocomplete");
    } else if (e.target.value === "exact") {
      setSearchCategory("complexSearch");
      setQueryType(false);
    }
  }

  //Fetch request, after data is set

  //I suppose you don't need to have e.preventDefault with React Router, it redirects you to page 2 which is populated with search
  function handleSubmit(e) {
    e.preventDefault();
    setLinkGetter(link);
    // console.log("test");
  }

  //Give select and input a required attribute

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
              <img
                className="searchbtn"
                src="https://img.icons8.com/ios-glyphs/120/faf8f2/search--v1.png"
              />
            </button>
          </div>

          <div className="menus">
            <div id="searchType">
              <select className="buttons" onInput={handleSelector}>
                <option selected disabled>
                  choose search type
                </option>
                <option value="search">default</option>
                <option value="exact">match title</option>
                <option value="autocomplete">autocomplete</option>
              </select>
            </div>
            <div id="random">
              <button className="buttons">randomize</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;

//Replace h1 tag with Homepage's children elements

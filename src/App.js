import logo from "./cc-logo-trans.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form action="/" method="get">
        <input
          className="searchBar"
          type="text"
          id="search"
          placeholder="Find your new favorite meal..."
        />
        <button className="searchbtn" type="submit">
          <img
            className="searchbtn"
            src="https://img.icons8.com/ios-glyphs/120/faf8f2/search--v1.png"
          />
        </button>
      </form>
      
      <div className="buttons">
        <div className="dropdown">
          <button className="dropbtn">search type</button>
          <div className="dropdown-content">
            <a href="#">default</a>
            <a href="#">match title</a>
            <a href="#">autocomplete</a>
          </div>
        </div>
        <div className="random">
          <button className="randombtn">random</button>
        </div>
      </div>
    </div>
  );
}

export default App;

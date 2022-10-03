import logo from "./cc-logo-trans.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      
      <div className="search">
        <div class="dropdown">
          <button class="dropbtn">filter</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="random">
          <button class="randombtn">random</button>
        </div>
      </div>
    </div>
  );
}

export default App;

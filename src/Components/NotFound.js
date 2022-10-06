import React from "react";

function Notfound() {
  return (
    <>
      <div className="error">
        <div>
          <h1>This page could not be found!</h1>
          <div>
            <a className="errorhome" href="/">
              take me home
            </a>
          </div>
          <footer className="home">© 2022 by CookCompass. All rights reserved.</footer>
        </div>
      </div>
    </>
  );
}

export default Notfound;

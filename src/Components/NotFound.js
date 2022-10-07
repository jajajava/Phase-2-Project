import React from "react";
import Footer from "./Footer";

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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Notfound;

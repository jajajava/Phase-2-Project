import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return <footer className="home">© {year} CookCompass. All rights reserved.</footer>;
}

export default Footer;
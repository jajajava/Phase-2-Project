import React from "react";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a className="active" href="/">
          <i className="bx bxs-home-alt-2"></i>
        </a>
      </li>
      <li>
        <a href="/favorites">
          <i className="bx bxs-star"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/jajajava/Phase-2-Project">
          <i className="bx bxl-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

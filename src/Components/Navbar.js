import React from "react";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <a class="active" href="/">
          <i class="bx bxs-home-alt-2"></i>
        </a>
      </li>
      <li>
        <a href="/favorites">
          <i class="bx bxs-star"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/jajajava/Phase-2-Project">
          <i class="bx bxl-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

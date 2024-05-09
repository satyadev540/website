import React from "react";
import "../App.css";

function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <a href="./" class="mr-5 ">
            Home
          </a>
          <a href="./projects" class="mr-5">
            Projects
          </a>
          <a href="./skills" class="mr-5 ">
            Skills
          </a>
          <a href="./Contact" class="mr-5">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

import React from "react";
import "../App.css";

function Navbar() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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

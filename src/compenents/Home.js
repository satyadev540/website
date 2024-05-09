import React from "react";
import "../App.css";
import my from "./My (1).png";
function Home() {
  return (
    <div class="main-container">
      <div class="containers">
        <div class="image">
          <img alt="hero" src={my}></img>
        </div>
        <div class="text">
          <h1>Hi This is Satya 😀</h1>
        </div>
      </div>
      <div class="text2">
        <p>
          As a subject matter expert at Chegg, I help students understand
          complex concepts and overcome academic challenges in computer science
          and engineering. With my expertise in MySQL, databases, and C
          programming, I provide clear and accurate solutions to various
          problems and queries, enabling students to achieve their learning
          goals and improve their performance.
        </p>
      </div>
    </div>
  );
}
export default Home;

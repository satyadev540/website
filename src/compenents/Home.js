import React from "react";
import "../App.css";
import my from "./My (1).png";
function Home() {
  return (
    <section className="text-gray-400  body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={my}
        ></img>
        <div class="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi This is Satya 😀
          </h1>
          <p className="leading-relaxed mb-8">
            As a subject matter expert at Chegg, I help students understand
            complex concepts and overcome academic challenges in computer
            science and engineering. With my expertise in MySQL, databases, and
            C programming, I provide clear and accurate solutions to various
            problems and queries, enabling students to achieve their learning
            goals and improve their performance.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Home;

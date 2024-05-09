import React from "react";
function Projects() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20"
          style={{ color: "bisque" }}
        >
          Satya's
          <br class="hidden sm:block"></br>
          Projects
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex">
            <div class="flex-grow pl-6">
              <h2
                class="text-gray-900 text-lg title-font font-medium mb-2"
                style={{ color: "white" }}
              >
                Blood Bank
              </h2>
              <p class="leading-relaxed text-base">
                A Blood Bank webpage serves as an essential resource for
                individuals seeking information about blood donation, the
                importance of blood banks, and how they can contribute to this
                life-saving cause.
              </p>
              <a
                href="https://unendeared-tip.000webhostapp.com/index.php"
                target="_blank"
                rel="noreferrer"
                class="mt-3 text-indigo-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;

import React from "react";
function Footer() {
  return (
    <footer className=" body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p
          class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
          style={{ color: "white" }}
        >
          © 2020 Satya Raman —
          <a
            href="https://twitter.com/SatyaRaman2"
            class=" ml-1"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "white" }}
          >
            @Satya
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/satyadev540"
            target="_blank"
            rel="noreferrer"
            class="text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style={{ color: "white" }}
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/_satya_dev__/?igshid=NzZlODBkYWE4Ng%3D%3D"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style={{ color: "white" }}
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/satya-raman/"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              style={{ color: "white" }}
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;

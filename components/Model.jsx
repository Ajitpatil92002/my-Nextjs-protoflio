import React from "react";

const Model = ({ project, handleModel }) => {
  return (
    <div
      data-aos-duration="400"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      class="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center transition-all ease-in-out duration-500"
    >
      {/* <!-- Modal --> */}
      <div class="w-full px-6 py-4 overflow-hidden bg-light-navy rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl">
        {/* <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. --> */}
        <header class="flex justify-end">
          <button
            onClick={() => handleModel(project)}
            class="inline-flex items-center justify-center w-6 h-6 text-green transition-colors duration-150 rounded hover: hover:text-gray-700"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </header>
        {/* <!-- Modal body --> */}
        <div class="mt-4 mb-6 flex items-center flex-col space-y-4">
          <div>
            <h4 className="text-center text-3xl font-mono font-extrabold tracking-normal mb-4 text-textgreen">
              {project.title}
            </h4>
          </div>
          <div>
            <p class="mb-2 text-base text-textlightWhite text-center">
              {project.desc}
            </p>
          </div>
          <div>
            {project.Category && (
              <div className="space-x-1 space-y-1 py-4">
                <span></span>
                {project.Category.map((category, i) => (
                  <span
                    key={i}
                    className="opacity-90 inline-block py-1 px-1 rounded  text-textlightWhite text-xs font-medium tracking-widest"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <footer class="flex flex-col items-center justify-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-[rgb(158,53,53/0.5)]">
          <button
            onClick={() => handleModel(project)}
            class="popup-cancel w-full px-5 py-3 text-sm font-medium leading-5 text-textlightWhite transition-colors duration-150 border border-gray-300 rounded-lg sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Model;

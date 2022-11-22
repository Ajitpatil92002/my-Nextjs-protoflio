const PrjList = ({ list, duration, handleModel }) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration={`${duration}`}
        data-aos-easing="ease-in-out"
        className="flex flex-col items-stretch mt-5"
      >
        <div
          className="flex flex-row group p-4 lg:p-6 hover:cursor-pointer  transition-all duration-200 delay-100 hover:bg-light-navy bg-opacity-50"
          onClick={() => handleModel(list)}
        >
          <div className="text-textgreen p-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[40px] h-[40px]"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>

          <div className="grow flex flex-col pl-5 pt-2 my-auto ">
            <div className="text-textlightWhite space-x-4 flex flex-col sm:flex-row">
              <h2 className="font-bold text-base md:text-lg lg:text-xl">
                {list.title}
              </h2>
            </div>
            <div className="font-semibold text-xs opacity-80  lg:text-sm  text-textlightWhite group-hover:text-gray-500 transition-all duration-200 delay-100 hidden sm:block">
              {list.desc.slice(0, 80)}...
            </div>
          </div>
          <div className="text-textlightWhite flex space-x-2 p-3">
            {list.GithubLink && (
              <a href={list.GithubLink} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[20px] h-[20px] hover:text-textgreen cursor-pointer"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            {list.webLink && (
              <a href={list.webLink} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[20px] h-[20px] hover:text-textgreen cursor-pointer"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrjList;

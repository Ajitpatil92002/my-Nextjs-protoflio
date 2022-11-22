
const ProjectList = ({
  title,
  body,
  githublink,
  weblink,
  duration,
  Category,
}) => {
  return (
    <>
      <div
        data-aos-duration={`${duration}`}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="flex flex-col h-full w-full rounded-md opacity-90  bg-light-navy mb-[35px] pt-[2rem] px-[1.5rem] hover:-translate-y-4 ease-out duration-200"
      >
        <div className="flex justify-between items-center">
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
          <div className="text-textlightWhite flex space-x-2 p-3">
            {githublink && (
              <a href={githublink} target="_blank">
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
            {weblink && (
              <a href={weblink} target="_blank">
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
        <div
          id="prj1"
          className="flex flex-col justify-between text-left text-textlightWhite mt-3"
        >
          <h4 className="flex text-3xl font-mono font-extrabold tracking-normal mb-4 hover:text-textgreen">
            <a href={weblink ? weblink : githublink} target="_blank">
              {title}
            </a>
          </h4>
          <p className="opacity-90 text-textlightWhite mt-2">{body}</p>
          {Category && (
            <div className="space-x-1 space-y-1 py-4">
              <span></span>
              {Category.map((category, i) => (
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
    </>
  );
};

export default ProjectList;

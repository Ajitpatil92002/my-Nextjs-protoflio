import Link from "next/link";

const Nopage = () => {
  return (
    <div className="bg-navy-blue flex items-center justify-center min-h-screen py-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="text-textlightWhite font-bold opacity-80 text-7xl">
            404
          </div>

          <div className="font-bold text-textlightWhite opacity-70 text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="text-textlightWhite opacity-60 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
        </div>

        <div className="flex flex-col mt-32">
          <div className="text-textlightWhite opacity-60 font-bold uppercase">
            Continue With
          </div>

          <div className="flex flex-col items-stretch mt-5">
            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer border-t-green
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-green-tint px-3 py-2 md:py-4">
                <span className="text-4xl text-textlightWhite">&#171;</span>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-green opacity-70">
                  <Link href={"/"}>Home Page</Link>
                </div>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  Everything starts here
                </div>
              </div>
            </div>
            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer border-t-green
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-green-tint px-3 py-2 md:py-4">
                <span className="text-4xl text-textlightWhite">&#171;</span>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-green opacity-70">
                  <Link href={"/project"}>Projects</Link>
                </div>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  My All Projects
                </div>
              </div>
            </div>
            <div
              className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer border-t-green
                    transition-all duration-200 delay-100"
            >
              <div className="rounded-xl bg-green-tint px-3 py-2 md:py-4">
                <span className="text-4xl text-textlightWhite">&#171;</span>
              </div>

              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-green opacity-70">
                  <Link href={"/contact"}>Contact</Link>
                </div>

                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                >
                  My Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nopage;

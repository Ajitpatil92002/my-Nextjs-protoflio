import Link from "next/link";

const Service = () => {
  return (
    <>
      <section
        data-aos-duration="400"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="text-textlightWhite body-font "
      >
        <div className="container px-5 py-24 mx-auto ">
          <div className="text-center mb-20 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-textlightWhite mb-4">
              My Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-green inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
            <div
              data-aos-duration="5 00"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="p-4 md:w-1/3 flex flex-col text-center items-center md:bg-light-navy bg-opacity-60"
            >
              <div className="w-20 h-20 inline-flex items-center bg-green-tint justify-center rounded-full text-textlightWhite mb-5 flex-shrink-0">
                <img
                  src="./assets/images/web-dev.svg"
                  alt="WebDevlopment"
                  className="w-10 h-10"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-textlightWhite text-lg title-font font-medium mb-3">
                  Web Development
                </h2>
                <div>
                  <ul className="space-y-4 space-x-3 flex flex-wrap justify-center">
                    <li></li>
                    <li className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        Business Landing Pages
                      </span>
                    </li>
                    <li className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        WordPress Website
                      </span>
                    </li>
                    <li className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        Ecommerce Website
                      </span>
                    </li>
                    <li className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        Blog & News Portal
                      </span>
                    </li>
                    <li data-aos-duration="700" className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        Domain Registration
                      </span>
                    </li>
                    <li data-aos-duration="800" className=" text-center">
                      <span className="text-textgreen pr-2">▹</span>
                      <span className="opacity-90 tracking-wide font-Roboto text-sm">
                        Web Hosting Services
                      </span>
                    </li>
                  </ul>
                </div>
                <Link
                  href={"/contact"}
                  className="mt-10 inline-flex items-center pl-4 cursor-pointer border-green border-2 w-32 text-center text-textlightWhite p-2 rounded-md font-normal hover:bg-green-tint"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

import { About, technologies } from "../data";

const AboutSection = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col mx-auto p-5 md:p-24">
          <h4
            className="flex text-3xl font-mono font-extrabold text-textlightWhite tracking-wide border-r-0 border-green border border-b-2 p-3 border-b-navy-blue"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="linear"
          >
            About Me
          </h4>
          <div className="flex flex-col justify-between mb-5 md:space-x-6 md:flex-row items-start">
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="linear"
              className="text-textlightWhite space-y-3 pt-6 md:w-1/2 font-Roboto text-base tracking-wide text-[0.9rem] md:text-base md:tracking-wider"
            >
              {About.map((p, i) => {
                return (
                  <p key={i} className="opacity-80 leading-loose">
                    {p}
                  </p>
                );
              })}
              <div>
                <h3 className="mb-5 text-lg opacity-70">
                  Here are a few technologies
                  <span className="animate-pulse text-lg">❤️</span> I’ve been
                  working with recently :
                </h3>
                <ul className="grid grid-rows-5 grid-flow-col gap-2 text-xs md:grid-rows-3">
                  {technologies.map((tech, i) => {
                    return (
                      <li key={i}>
                        <span className="text-textgreen font-bold">▹</span>
                        <span className="opacity-70">{tech}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="m-0 mt-4 md:mt-0 md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="linear"
            >
              <img
                src={"./assets/images/Ajit_Patil.jpg"}
                className="rounded-lg object-cover h-[500px] w-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

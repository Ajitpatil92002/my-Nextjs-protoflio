
const Hero = () => {
  return (
    <>
      <section id="">
        <div className="conatiner md:mx-auto mt-6 flex  flex-col md:text-center text-textlightWhite mx-10 space-y-6 sm:space-y-8 md:space-y-10 sm:items-center md:justify-center z-10">
          <div
            className="text-textgreen font-mono md:text-2xl"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            <span>
              Hi<span className="wave">👋🏻</span>, my name is
            </span>
          </div>
          <div>
            <h1
              className="text-4xl md:text-7xl font-mono font-extrabold"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Ajit Rajesh Patil.
            </h1>
          </div>
          <div>
            <h2
              className="text-2xl md:text-6xl font-mono opacity-80 font-bold"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              Web Developer.
            </h2>
          </div>
          <div
            className="font-mono tracking-wide opacity-75 sm:text-center max-w-sm md:text-xl"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
          >
            <h2>
              Passionate about work,
              <br />
              Self-reliant and eager to learn new Technologies !
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1350"
            className="md:hidden border-green border-2 w-32 text-center z-[1] md:m-0 text-white p-2 rounded-md font-normal hover:bg-green-tint"
          >
            <a href="#" className="tracking-widest">
              Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

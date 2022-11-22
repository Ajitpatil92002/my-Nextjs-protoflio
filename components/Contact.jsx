const Contact = () => {
  return (
    <>
      <section
        id="contact"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-easing="linear"
      >
        <div className="container mx-auto mt-5 p-5 flex flex-col justify-center items-center text-textlightWhite text-center space-y-8 md:p-24">
          <h2 className="text-4xl sm:text-6xl font-mono text-textlightWhite font-extrabold tracking-wide w-full text-center border-green border border-b-2 pt-5 border-b-navy-blue">
            Get In Touch
          </h2>
          <div className="opacity-70 max-w-lg">
            I’m looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </div>
          <div className="border-green border-2 w-36 text-center z-[1] md:m-0 text-white p-2 rounded-md font-normal hover:bg-green-tint mt-2">
            <a
              href="mailto:patilajit020@gmail.com"
              className="tracking-widest text-textlightWhite"
            >
              Say Hi! :-)
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

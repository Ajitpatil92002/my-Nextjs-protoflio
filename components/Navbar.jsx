import Link from "next/link";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const nav = useRef(0);
  useEffect(() => {
    let currPos = window.scrollY;
    const removeEvent = document.addEventListener("scroll", () => {
      try {
        if (window.scrollY > currPos) {
          nav.current.classList.remove("sticky");
          //scroll down
        } else if (currPos < 50) {
          nav.current.classList.remove("sticky");
        } else {
          //scroll up
          nav.current.classList.add("sticky");
        }
        currPos = window.scrollY;
      } catch (err) {
      }
    });

    return () => {
      window.removeEventListener("scroll", removeEvent);
    };
  });

  return (
    <>
      <nav
        ref={nav}
        id="navbar"
        className="md:flex container text-textlightWhite p-6 px-5 mx-auto justify-evenly items-center space-y-6 md:space-y-0 z-10 ease-linear duration-100"
      >
        <div
          className="text-xl font-bold font-mono cursor-pointer text-center tracking-widest text-textgreen"
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-easing="linear"
        >
          <Link href={"/"}>Ajit Patil</Link>
        </div>
        <div className="flex space-x-2 justify-center items-center md:space-x-20 flex-wrap md:flex-nowrap font-sans">
          <div></div>
          <div
            className="cursor-pointer text-base font-normal tracking-widest hover:text-slate-500"
            data-aos="fade-down"
            data-aos-duration="400"
            data-aos-easing="linear"
          >
            <Link href="/" className="hover:text-textgreen">
              Home
            </Link>
          </div>
          <div
            className="cursor-pointer text-base font-normal tracking-widest hover:text-slate-500"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <Link href="/about" className="hover:text-textgreen">
              About
            </Link>
          </div>
          <div
            className="cursor-pointer text-base font-normal tracking-widest hover:text-slate-500"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <Link href={"/projects"} className="hover:text-textgreen">
              Projects
            </Link>
          </div>
          <div
            className="cursor-pointer text-base font-normal tracking-widest hover:text-slate-500"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <Link href="/services" className="hover:text-textgreen">
              services
            </Link>
          </div>
          <div
            className="cursor-pointer text-base font-normal tracking-widest hover:text-slate-500"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <Link href="/contact" className="hover:text-textgreen">
              Contact
            </Link>
          </div>
        </div>
        <div
          className="hidden md:block border-green border-2 w-24 text-center m-auto md:m-0 text-white p-2 rounded-md font-normal hover:bg-green-tint"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="linear"
        >
          <a href="#" className="tracking-widest text-textlightWhite">
            Resume
          </a>
        </div>
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;

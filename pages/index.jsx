import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Project from "../components/Project";
import Service from "../components/Service";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <div className="hero relative h-screen ">
        <Navbar />
        <Hero />
      </div>
      <AboutSection />
      <Tabs />
      <Project />
      <Service />
      <Contact />
    </div>
  );
}

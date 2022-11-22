import Head from "next/head";
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
      <Head>
        <title>Ajit Patil - Web Developer</title>
        <meta
          name="description"
          content="Ajit Rajesh Patil web developer with skills of both frontEnd and BackEnd Development in  JavaScript. currently a third year student at GURU NANAK DEV ENGINEERING COLLEGE KARNATAKA BIDAR pursuing a degree in Computer science"
        />
        <meta
          name="keywords"
          content="patil ajit ,patilajit,ajitpatil,ajitrajeshpatil,ajitpatilbidar,webdeveloper,bidarwebdeveloper,patilajitwebdeveloper"
        />
        <meta property="og:title" content="Ajit Patil- Web Developer" />
        <meta property="og:url" content="https://www.patilajit.com" />
        <meta
          property="og:type"
          content="Ajit Rajesh Patil web developer with skills of both frontEnd and BackEnd Development in  JavaScript. currently a third year student at GURU NANAK DEV ENGINEERING COLLEGE KARNATAKA BIDAR pursuing a degree in Computer science"
        />
      </Head>
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

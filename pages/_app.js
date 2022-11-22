import "../styles/globals.css";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.body.classList.add("bg-navy-blue")
  }, []);

  return (
    <div className=" scroll-smooth">
      <Head>
        <title>Ajit Patil - Web Developer</title>
        <meta
          name="description"
          content="Ajit Rajesh Patil is Web Developer from Bidar , Karnataka. Who specialized in building WebSites and Web Apps. currently a third year student at GURU NANAK DEV ENGINEERING COLLEGE KARNATAKA BIDAR pursuing a degree in Computer science"
        />
        <meta
          name="keywords"
          content="patil ajit ,patilajit,ajitpatil,ajitrajeshpatil,ajitpatilbidar,webdeveloper,bidarwebdeveloper,patilajitwebdeveloper"
        />
        <meta property="og:title" content="Ajit Patil- Web Developer" />
        <meta property="og:url" content="https://www.patilajit.com" />
        <meta
          property="og:type"
          content="Ajit Rajesh Patil is Web Developer from Bidar , Karnataka. Who specialized in building WebSites and Web Apps. currently a third year student at GURU NANAK DEV ENGINEERING COLLEGE KARNATAKA BIDAR pursuing a degree in Computer science"
        />
        <link rel="icon" href="/light.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-navy-blue scroll-smooth">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

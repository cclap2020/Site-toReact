import Nav from "../Nav/Nav";
import Contact from "../ContactPage/Contact/Contact";
import Portfolio from "../PortfolioPage/Portfolio/Portfolio";
import Home from "./Home/Home";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

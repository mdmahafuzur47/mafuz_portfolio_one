import About from "../../shared_pages/About/About";
import Banner from "../../shared_pages/Banner/Banner";
import Contact from "../../shared_pages/contact/Contact";
import Footer from "../../shared_pages/footer/Footer";
import Navbar from "../../shared_pages/navbar/Navbar";
import Projects from "../../shared_pages/projects/Projects";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import About from "../../shared_pages/About/About";
import Banner from "../../shared_pages/Banner/Banner";
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

      <Footer />
    </div>
  );
};

export default Home;

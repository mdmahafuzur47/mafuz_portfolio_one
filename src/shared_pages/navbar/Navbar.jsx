import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="flex bg-white text-xl items-center fixed top-0 w-full  justify-between font-semibold text-gray-900 px-20 py-5 shadow-md z-10">
        <h1 className="italic text-2xl font-bold">Mafuz.dev</h1>
        <ul className="flex gap-5">
          <Link to={"#home"} smooth>
            <li>Home</li>
          </Link>
          <Link to={"#about"} smooth>
            <li>About</li>
          </Link>
          <Link to={"#projects"} smooth>
            <li>Projects</li>
          </Link>
          <Link to={"#contact"} smooth>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;

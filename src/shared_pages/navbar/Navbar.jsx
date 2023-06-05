import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-white text-xl items-center fixed top-0 w-full  justify-between font-semibold text-gray-900 px-20 py-5 shadow-md z-10">
      <h1 className="italic text-2xl font-bold">Mafuz.dev</h1>
      <ul className="flex gap-5">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

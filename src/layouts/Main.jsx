import { Outlet } from "react-router-dom";
import Navbar from "../shared_pages/navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;

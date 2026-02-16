import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <nav>...your nav...</nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;

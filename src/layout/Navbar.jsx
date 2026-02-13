import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>...your nav...</nav>
      <Outlet />
    </>
  );
};

export default Navbar;

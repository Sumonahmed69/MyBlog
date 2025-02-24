import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

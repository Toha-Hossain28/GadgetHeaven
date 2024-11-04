import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <NavBar />
      <Banner />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;

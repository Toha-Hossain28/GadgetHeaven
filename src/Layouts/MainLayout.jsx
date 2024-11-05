import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";

function MainLayout() {
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
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

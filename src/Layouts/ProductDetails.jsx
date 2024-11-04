import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet, useParams, useLocation } from "react-router-dom";
function ProductDetails() {
  const a = useParams();
  let location = useLocation();
  // console.log(a);
  console.log(location);
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;

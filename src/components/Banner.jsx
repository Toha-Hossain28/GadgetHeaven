import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Banner() {
  const { pathname } = useLocation();
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    if (pathname === "/" || pathname.includes("/categories")) {
      setShowImg(true);
    } else {
      setShowImg(false);
    }
  }, [pathname]);
  return (
    <>
      <div className="hero bg-[#9538E2] min-h-[300px] pb-[200px] pt-10 rounded-b-box">
        <div className="hero-content text-center pb-12">
          <div className="max-w-[1150px] text-white">
            <h1 className="text-6xl font-bold mb-6">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="font-normal text-base max-w-[800px] mx-auto mb-8">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn rounded-full text-[#9538E2] font-bold text-xl px-8">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div
        className={`max-w-[1110px] mx-auto rounded-box h-[610px] p-6 border-2 border-white bg-gray-100 relative -top-52 bg-opacity-25 ${
          showImg ? "" : "hidden"
        }`}
      >
        <div className="w-full h-full">
          <img src="./banner.jpg" alt="" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default Banner;

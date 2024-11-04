import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DetailProductCard from "../components/DetailProductCard";

function ProductDetails() {
  const params = useParams();
  const productId = params.product_id;
  // console.log(product_id);

  const data = useLoaderData();
  const product = data.filter((product) => product.product_id === productId);
  // console.log(product);
  return (
    <div className="max-w-[1600px] border-x-[30px] border-t-[30px]  border-transparent mx-auto">
      <NavBar />
      <div className="bg-[#9538E2] text-center pt-8">
        <h3 className="font-bold text-[32px] text-white">Product Details</h3>
        <p className="font-normal text-base pt-4 text-white w-2/5 mx-auto pb-[235px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-white relative -top-44 p-8 bg-white rounded-box">
        <DetailProductCard product={product} />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;

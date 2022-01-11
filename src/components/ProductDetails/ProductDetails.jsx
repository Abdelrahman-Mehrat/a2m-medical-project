import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import Data from "../../Database/ProductsInfo.json";
import IMAGES from "../../assets/image";
import "./ProductDetails.css";
function ProductDetails() {
  const { pathname } = useLocation();
  const [category, setCategory] = useState();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    setCategory(pathname.slice(1, pathname.indexOf("Products")).toLowerCase());
    let productId = pathname.slice(pathname.lastIndexOf("/") + 1);
    let filteredProduct = Data[category]?.filter(
      (product) => product.id === +productId,
    )[0];
    setProductDetails(filteredProduct);
  }, [category, pathname, productDetails]);
  const [sliderArray, setSliderArray] = useState([]);
  useEffect(() => {
    setSliderArray(
      IMAGES[category]?.subImages?.map((path, index) => {
        return <img className='' src={path} alt={index} />;
      }),
    );
  }, [category]);
  return (
    <section className='product__details mt-5'>
      {sliderArray && (
        <Carousel
          className='product__slider'
          slides={sliderArray}
          autoplay={false}
        />
      )}
    </section>
  );
}
export default ProductDetails;

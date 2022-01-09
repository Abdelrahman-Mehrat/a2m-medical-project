import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
      {sliderArray && <Carousel className="product__slider" slides={sliderArray} autoplay={false} />}
      {/* {productDetails && (
        <div className='container'>
          <div className='row'>
            <figure className='col-lg-5'>
              <img className='w-100' src={IMAGES[category]?.mainImage} alt='' />
            </figure>
            <div className='col-lg-7'>
              <h3>{productDetails?.name}</h3>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default ProductDetails;

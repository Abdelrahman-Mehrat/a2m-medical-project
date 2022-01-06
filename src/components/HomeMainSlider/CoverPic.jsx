import "./coverPic.css";
import imgOne from "../../assets/image/home/cosmetics-cover.jpg";
import imgTwo from "../../assets/image/home/1 english.jpg";
import imgThree from "../../assets/image/home/3.jpg";
import imgFour from "../../assets/image/home/2 english.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAddressCard,
//   faAirFreshener,
//   faCoffee,
// } from "@fortawesome/free-solid-svg-icons";
export const CoverPic = () => {
  return (
    <>
      <div className='mainImage'>
        <Carousel>
          <div>
            <img src={imgOne} />
          </div>
          <div>
            <img src={`${imgTwo}`} />
          </div>
          <div>
            <img src={`${imgThree}`} />
          </div>
          <div>
            <img src={`${imgFour}`} />
          </div>
        </Carousel>
      </div>
      <div className='contactUs  p-5'>
        <div className='container'>
          <div className='row  justify-content-center'>
            {/* <div className="contactUs__data p-2 mx-2 text-center">
        <FontAwesomeIcon icon={faAddressCard} className="iconn" />
            <p>Supplements</p>
        </div>
        <div className="contactUs__data p-2 mx-2 text-center">
        <FontAwesomeIcon icon={faAddressCard} className="iconn" />
            <p>Cosmetics</p>
        </div>
        <div className="contactUs__data p-2 mx-2 text-center">
        <FontAwesomeIcon icon={faAddressCard} className="iconn" />
            <p>Supplements</p>
        </div> */}
            <div className='col-md-4  col-sm-6 py-1 px-4'>
              <div className='p-4  contactUs__data text-center'>
              <i class="fas fa-tachometer-alt fa-2x mb-2"></i>
                <p>Supplements</p>
              </div>
            </div>
            <div className='col-md-4  col-sm-6 py-1 px-4'>
              <div className='p-4 contactUs__data text-center'>
              <i class="fas fa-adjust fa-2x mb-2"></i>
                <p>Cosmetics</p>
              </div>
            </div>
            <div className='col-md-4  col-sm-6 py-1 px-4'>
              <div className='p-4 contactUs__data text-center'>
              <i class="fas fa-baby-carriage fa-2x mb-2"></i>
                <p>Nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

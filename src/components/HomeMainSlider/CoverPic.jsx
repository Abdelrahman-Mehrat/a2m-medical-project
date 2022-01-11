import imgOne from "../../assets/image/home/cosmetics-cover.jpeg";
import imgTwo from "../../assets/image/home/1 english.jpg";
import imgThree from "../../assets/image/home/3.jpg";
import imgFour from "../../assets/image/home/2 english.jpg";
import imgFive from "../../assets/image/home/nutriCover.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CoverPic.css";
export const CoverPic = () => {
  return (
    <>
      <div className='mainImage'>
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={imgOne} alt='' />
          </div>
          <div>
            <img src={imgTwo} alt='' />
          </div>
          <div>
            <img src={imgThree} alt='' />
          </div>
          <div>
            <img src={imgFive} alt='' />
          </div>

          <div>
            <img src={imgFour} alt='' />
          </div>
        </Carousel>
      </div>
      <div className='contactUs p-5'>
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
            <div className='col-md-4 col-sm-6 py-1  px-4 px-sm-3 px-md-2'>
              <div className='p-4  contactUs__data text-center'>
                <i className='fas fa-tachometer-alt fa-2x mb-2'></i>
                <p>Supplements</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 py-1 px-4 px-sm-3 px-md-2'>
              <div className='p-4 contactUs__data text-center'>
                <i className='fas fa-adjust fa-2x mb-2'></i>
                <p>Cosmetics</p>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 py-1 px-4 px-sm-3 px-md-2'>
              <div className='p-4 contactUs__data text-center'>
                <i className='fas fa-baby-carriage fa-2x mb-2'></i>
                <p>Nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

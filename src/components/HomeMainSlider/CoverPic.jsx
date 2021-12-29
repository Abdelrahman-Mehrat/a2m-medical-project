import "./coverPic.css"
import imgOne from "../../assets/image/home/1.jpg"
import imgTwo from "../../assets/image/home/2.jpg"
import imgThree from "../../assets/image/home/3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const CoverPic = ()=>{
    return(
        <>
        <div className="mainImage"> 
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
            </Carousel>
         </div>
        <div className="contactUs  py-4">
            <div className="container">
        <div className=" row">
        <div className="col-md-6 py-2 px-4">
            <div className="p-2 contactUs__data text-center">
            our mail@mail.com
            </div>
        </div>
        <div className="col-md-6 py-2 px-4">
            <div className="p-2 contactUs__data text-center">
            our mail@mail.com
            </div>
        </div>
            </div>
        </div>
        </div>        
        </>
    )
}
import Category from "../HomeCategories/Category";
import AboutUsMain from "../HomeAboutUs/AboutUsMain";
import { CoverPic } from "../HomeMainSlider/CoverPic";
import { Footer } from "../../shared/Footer/Footer";
// import { useEffect } from "react";
// const 
const HomePage = ()=>{
    // useEffect(()=>{
    //     console.log(Data);
    // })
    return(
        <>
        <CoverPic/>
        <AboutUsMain/>
        <Category/>
        <Footer />
        </>
        
    )
}
export default HomePage;
import Category from "../HomeCategories/Category";
import AboutUsMain from "../HomeAboutUs/AboutUsMain";
import { CoverPic } from "../HomeMainSlider/CoverPic";
import { HomeContactUs } from "../HomeContactUs/HomeContactUs";
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
        <HomeContactUs/>
        </>
        
    )
}
export default HomePage;
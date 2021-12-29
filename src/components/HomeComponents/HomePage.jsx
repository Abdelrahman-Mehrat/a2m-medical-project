import Category from "../HomeCategories/Category";
import AboutUsMain from "../HomeAboutUs/AboutUsMain";
import { CoverPic } from "../HomeMainSlider/CoverPic";
import Data from "../../Database/ProductsInfo.json"
import { useEffect } from "react";

const HomePage = ()=>{
    useEffect(()=>{
        console.log(Data);
    })
    return(
        <>
        <CoverPic/>
        <AboutUsMain/>
        <Category/>
        </>
        
    )
}
export default HomePage;
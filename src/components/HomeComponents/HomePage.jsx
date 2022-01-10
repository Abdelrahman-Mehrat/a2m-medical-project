import { useState, useEffect } from "react";
import Category from "../HomeCategories/Category";
import AboutUsMain from "../HomeAboutUs/AboutUsMain";
import { CoverPic } from "../HomeMainSlider/CoverPic";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    function handlingLoading() {
      setIsLoading(true);
    }
    window.addEventListener("load", handlingLoading);
    return () => {
      window.removeEventListener("load", handlingLoading);
    };
  }, [isLoading]);
  return (
    <>
      <CoverPic />
      <AboutUsMain />
      <Category />
    </>
  );
};
export default HomePage;

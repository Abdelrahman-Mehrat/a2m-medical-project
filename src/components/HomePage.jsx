import Category from "./category/Category";
import AboutUsMain from "./homeComponents/about/AboutUsMain";
import { CoverPic } from "./homeComponents/coverImage/CoverPic";

const HomePage = ()=>{
    return(
        <>
        <div>home</div>
        <CoverPic/>
        <AboutUsMain/>
        <Category/>
        </>
        
    )
}
export default HomePage;
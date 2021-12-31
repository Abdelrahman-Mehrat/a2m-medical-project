import Data from "../../Database/ProductsInfo.json"
import { useEffect } from "react";
import img1 from "../../assets/image/supplement/card-01.jpg";
import img2 from "../../assets/image/supplement/card-02.jpg";
import img3 from "../../assets/image/supplement/card-03.jpg";
import img4 from "../../assets/image/supplement/card-04.jpg";
import { useState } from "react";
import "./supplementProducts.css"
import { SingleCard } from "../category1/single/SignleCard";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
export const SupplementProducts =()=>{
    const [supplementData,setSupplementData]= useState([])
    useEffect(()=>{
        setSupplementData(Data.supplement)
    },[supplementData])
    console.log(supplementData[3]?.url);
    return(
        <>
        <section className="supplement__page">
        <div className="container">
        <h2 className="text-center pt-4 pb-3">SupplementProducts</h2>
        <div className="row">
        {
            supplementData?.map(i=>{
                return(
                    <PageCardCategory img={img1} i={i} />
                )
            })
        }
        </div>
        </div>
        </section>
        
        </>
    )
}
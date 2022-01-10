import { useEffect } from "react";
import { useState } from "react";
import "./PharmaceuticalsProducts.css"

import Data from "../../Database/ProductsInfo.json";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
export const PharmaceuticalsProducts = ()=>{
    const[phrmaData,setPhrmaData]=useState([]);
    useEffect(()=>{
        setPhrmaData(Data.pharma)
    },[phrmaData])
    return(
        <div className="Pharma__section">
            <h2 className="text-center">pharmaceuticalsProducts</h2>
            <div className="row justify-content-center">
                {
                   
                    phrmaData.map(i=>{
                        return(
                            <PageCardCategory i={i} key={i.id} />
                        )
                    })
                }
            </div> 
        </div>
    )
}
import "./cosmeticsProducts.css";
import Data from "../../Database/ProductsInfo.json"
import { useEffect } from "react";
import img1 from "../../assets/image/supplement/card-01.jpg";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
import { useState } from "react";
export const CosmeticsProducts = () => {
    const [conmeticsData, setConmeticsData] = useState([])
    useEffect(() => {
        setConmeticsData(Data.cosmetics)
    }, [conmeticsData])
    console.log(conmeticsData[3]?.url);

    return (
        <section className="Cosmatics__Page">
            <div className="container ">
                <h2 className="text-center pt-4">Cosmatics </h2>
                <div className=" row pt-5">
                    {
                        conmeticsData?.map(i => {
                            return (
                                <PageCardCategory img={img1} i={i} />
                            )
                        })
                    }
                </div>

            </div>
        </section>

    )
}
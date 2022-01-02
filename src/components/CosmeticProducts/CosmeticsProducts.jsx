import { useEffect, useState } from "react";
import Data from "../../Database/ProductsInfo.json";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
import "./cosmeticsProducts.css";
export const CosmeticsProducts = () => {
  const [conmeticsData, setConmeticsData] = useState([]);
  useEffect(() => {
    setConmeticsData(Data.cosmetics);
  }, [conmeticsData]);

  return (
    <section className='Cosmatics__Page'>
      <div className='container '>
        <h2 className='text-center pt-4'>Cosmatics </h2>
        <div className=' row pt-5'>
          {conmeticsData?.map((i) => {
            return <PageCardCategory i={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

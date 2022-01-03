import "./NutritionProducts.css";
import { useEffect, useState } from "react";
import Data from "../../Database/ProductsInfo.json";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";

export const NutretionProducts = () => {
  const [nutretionData, setNutretionData] = useState([]);
  useEffect(() => {
    setNutretionData(Data.nutretion);
  }, [nutretionData]);

  return (
    <>
      <section className='nutrition__page'>
        <div className='container'>
          <h2 className='text-center pt-4 pb-3'>Nutrition Products</h2>
          <div className='row'>
            {nutretionData?.map((i) => {
              return <PageCardCategory i={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

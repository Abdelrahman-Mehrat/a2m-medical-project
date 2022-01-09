import { useEffect, useState } from "react";
import Data from "../../Database/ProductsInfo.json";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
import "./supplementProducts.css";
export const SupplementProducts = () => {
  const [supplementData, setSupplementData] = useState([]);

  useEffect(() => {
    setSupplementData(Data.supplement);
  }, [supplementData]);
  return (
    <>
    {
    <section className='supplement__page'>
      <div className='container'>
        <h2 className='text-center pt-4 pb-3'>Supplement Products</h2>
        <div className='row'>
          {supplementData?.map((i) => (
            <PageCardCategory i={i} key={i.id} />
          ))}
        </div>
      </div>
    </section> 
    }
     
    </>
  );
};

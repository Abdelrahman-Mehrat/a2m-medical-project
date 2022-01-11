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
        <section className='supplement__page py-5'>
          <div className='container'>
            <h2 className='text-center mb-5'>Supplements Products</h2>
            <div className='row justify-content-center'>
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

import { useEffect, useState } from "react";
import PageCardCategory from "../PageCardCategory/PageCardCategory";
import Data from "../../Database/ProductsInfo.json";
import "./supplementProducts.css";
const SupplementProducts = () => {
  const [supplementData, setSupplementData] = useState([]);
  useEffect(() => {
    setSupplementData(Data.supplement);
  }, [supplementData]);
  return (
    <>
      {
        <section className="supplement__page py-5">
          <div className="container">
            <h2 className="text-center mb-5 category__header">
              Supplements Products
            </h2>
            <div className="row justify-content-center">
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
export default SupplementProducts;

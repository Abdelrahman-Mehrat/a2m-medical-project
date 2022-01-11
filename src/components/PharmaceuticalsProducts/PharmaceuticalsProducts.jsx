import { useEffect, useState } from "react";
import PageCardCategory from "../PageCardCategory/PageCardCategory";
import Data from "../../Database/ProductsInfo.json";
import "./PharmaceuticalsProducts.css";
const PharmaceuticalsProducts = () => {
  const [phrmaData, setPhrmaData] = useState([]);
  useEffect(() => {
    setPhrmaData(Data.pharma);
  }, [phrmaData]);
  return (
    <div className='Pharma__section'>
      <h2 className='text-center'>pharmaceuticals Drugs</h2>
      <div className='row justify-content-center'>
        {phrmaData.map((i) => {
          return <PageCardCategory i={i} key={i.id} />;
        })}
      </div>
    </div>
  );
};
export default PharmaceuticalsProducts;

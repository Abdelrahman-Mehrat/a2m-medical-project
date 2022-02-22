import { useEffect, useState } from "react";
import PageCardCategory from "../PageCardCategory/PageCardCategory";
import Data from "../../Database/ProductsInfo.json";
import "./CosmeticsProducts.css";
const CosmeticsProducts = () => {
  const [conmeticsData, setConmeticsData] = useState([]);
  useEffect(() => {
    setConmeticsData(Data.cosmetics);
  }, [conmeticsData]);
  return (
    <section className="Cosmatics__Page">
      <div className="container">
        <h2 className="text-center pt-4 category__header">Cosmetics</h2>
        <div className=" row pt-5">
          {conmeticsData?.map((i) => {
            return <PageCardCategory i={i} key={i.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default CosmeticsProducts;

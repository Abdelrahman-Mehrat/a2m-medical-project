import Data from "../../Database/ProductsInfo.json";
import { useEffect } from "react";
import img1 from "../../assets/image/supplement/card-01.jpg";
import img2 from "../../assets/image/supplement/card-02.jpg";
import img3 from "../../assets/image/supplement/card-03.jpg";
import img4 from "../../assets/image/supplement/card-04.jpg";

import { useState } from "react";
import { SingleCard } from "../category1/single/SignleCard";

export const SupplementProducts = () => {
  const [supplementData, setSupplementData] = useState([]);
  useEffect(() => {
    setSupplementData(Data.supplement);
  }, [supplementData]);
  return (
    <>
      <div className='container'>
        <h2>SupplementProducts</h2>
        {supplementData?.map((i) => {
          return (
            <SingleCard i={i} key={i.id}/>
            // <SingleCard img={img1} i={i} />
          );
        })}
        {/* card */}
      </div>
      <img src={img1} alt='' />
    </>
  );
};

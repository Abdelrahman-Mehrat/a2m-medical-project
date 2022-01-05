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
          <div className="Content">
          <h3>NutriBaby</h3>
          <p>The NutriBaby range provides a complete balance of essential nutrients for new-born babies and pre-school children.</p>
          <hr />
          <div>
            <span>01</span>
            <h3>We represent European quality</h3> 
            <p>The NutriBaby range is produced only in Poland, in the heart of the European Union. We use only EU-origin ingredients, purchased only at trusted sources. All the ingredients, including milk, are carefully tested at our laboratories before using them for production.

Our production facilities and processes are supervised by the authorities and must always comply with strict EU norms and food safety and quality regulations.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Produced from fresh milk</h3> 
            <p>Milk and whey, the core ingredients which we use, are always fresh. We blend them together in appropriate proportion, add other required ingredients and only then spray dry into the powder form. Afterwards we add only auxiliary ingredients, which are not suited for high-temperature processing.</p>
            <h4>The NutriBaby range:</h4>
            <ul>
              <li>has always all the nutritional quality and quantity maintained,</li>
              <li>contains easily digestible, not deteriorated proteins, which are highly bioavailable,</li>
              <li>has good solubility and great organoleptic qualities (taste, colour, smell),</li>
              <li>is homogeneus (the nutrients are uniformly distributed).</li>
            </ul>
          </div>
          <div>
            <span>03</span>
            <h3>Our experience</h3> 
            <p>We have been supplying generations of children with our formulas.

No one would like to give their most precious baby into the hands of an unexperienced stranger. When choosing NutriBaby range, parents can are assured that through our years-long experience and wide, global presence, we know exactly what new-borns need and we supply them exactly this.

NutriBaby is always safe and nutritionally complete</p>
          </div>
          <div>
            <span>04</span>
            <h3>Online Quality Inspection™ tool</h3> 
            <p>Our absolutely unique  <a href="https://qc.geo-poland.com/">Online Quality Inspection™ tool</a>  brings added value to parents feeding their baby with the NutriBaby formula. They can easily verify the origin of the NutriBaby product (its genuineness) and the quality.

We are proud of our products and have nothing to hide when it comes to their quality.</p>
          </div>
          </div>
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

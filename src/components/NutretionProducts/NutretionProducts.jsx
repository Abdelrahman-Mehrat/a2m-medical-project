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
    <div class="container">
      <div class="row inbox">
        <div class="col-md-12 p-5">
          <div class="panel panel-default">
            <div class="panel-body">
              <div className="head-content text-center">
                <h3 className="head-title">NutriBaby</h3>
                <q>The NutriBaby range provides a complete balance of essential nutrients for new-born babies and pre-school children.</q>
              </div>
              <ul class="messages-list">
                <li class="unread">

                  <div class="header">
                    <span class="from">01</span>
                    <span class="date"><i class="fas fa-cannabis"></i></span>
                  </div>
                  <div class="title">
                    <span class="action"><i class="fa fa-star-o"></i><i class="fa fa-star bg"></i></span>
                    We represent European quality
                  </div>
                  <div class="description">
                    The NutriBaby range is produced only in Poland, in the heart of the European Union. We use only EU-origin ingredients, purchased only at trusted sources. All the ingredients, including milk, are carefully tested at our laboratories before using them for production. Our production facilities and processes are supervised by the authorities and must always comply with strict EU norms and food safety and quality regulations.</div>

                </li>
                <li class="unread">

                  <div class="header">
                    <span class="from">02</span>
                    <span class="date"><i class="fas fa-cannabis"></i></span>
                  </div>
                  <div class="title">
                    <span class="action"><i class="fa fa-star-o"></i><i class="fa fa-star bg"></i></span>
                    Produced from fresh milk
                  </div>
                  <div class="description">
                    Milk and whey, the core ingredients which we use, are always fresh. We blend them together in appropriate proportion, add other required ingredients and only then spray dry into the powder form. Afterwards we add only auxiliary ingredients, which are not suited for high-temperature processing.</div>
                  <h4>The NutriBaby range</h4>
                  <ul className="text-capitalize">
                    <li>has always all the nutritional quality and quantity maintained,</li>
                    <li>contains easily digestible, not deteriorated proteins, which are highly bioavailable,</li>
                    <li>has good solubility and great organoleptic qualities (taste, colour, smell),</li>
                    <li>is homogeneus (the nutrients are uniformly distributed).</li>
                  </ul>

                </li>
                <li class="unread">

                  <div class="header">
                    <span class="from">03</span>
                    <span class="date"><i class="fas fa-cannabis"></i></span>
                  </div>
                  <div class="title">
                    <span class="action"><i class="fa fa-star-o"></i><i class="fa fa-star bg"></i></span>
                    Our experience
                  </div>
                  <div class="description">
                    We have been supplying generations of children with our formulas. No one would like to give their most precious baby into the hands of an unexperienced stranger. When choosing NutriBaby range, parents can are assured that through our years-long experience and wide, global presence, we know exactly what new-borns need and we supply them exactly this. NutriBaby is always safe and nutritionally complete</div>

                </li>
                <li class="unread">

                  <div class="header">
                    <span class="from">04</span>
                    <span class="date"><i class="fas fa-cannabis"></i></span>
                  </div>
                  <div class="title">
                    <span class="action"><i class="fa fa-star-o"></i><i class="fa fa-star bg"></i></span>
                    Our absolutely unique Online Quality Inspection™ tool
                  </div>
                  <div class="description">
                    Our absolutely unique  <a href="https://qc.geo-poland.com/" className="tool">Online Quality Inspection™ tool</a>  brings added value to parents feeding their baby with the NutriBaby formula. They can easily verify the origin of the NutriBaby product (its genuineness) and the quality.

                    We are proud of our products and have nothing to hide when it comes to their quality.</div>

                </li>
                <div className='row'>
                  {nutretionData?.map((i) => {
                    return <PageCardCategory i={i} />;
                  })}
                </div>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

import "./NutritionProducts.css";
import { useEffect, useState } from "react";
import Data from "../../Database/ProductsInfo.json";
import { PageCardCategory } from "../PageCardCategory/PageCardCategory";
import nutriLogo from "./nutriLogo.jpg";
import babySection1 from "./babySection1.jpg";
import babySection2 from "./baby2.jpg";

export const NutretionProducts = () => {
  const [nutretionData, setNutretionData] = useState([]);
  useEffect(() => {
    setNutretionData(Data.nutretion);
  }, [nutretionData]);

  return (
    <div className='container'>
      <div className='row  inbox'>
        <div className='col-md-12 p-5'>
          <div className='panel panel-default'>
            <div className='panel-body'>
              <div className='head-content align-items-center row'>
                <div className='col-sm-3'>
                  <img className='w-100' src={nutriLogo} alt='' />
                </div>
                <div className='col-sm-9'>
                  <h3 className='head-title'>NutriBaby</h3>
                  <q>
                    The NutriBaby range provides a complete balance of essential
                    nutrients for new-born babies and pre-school children.
                  </q>
                </div>
              </div>
              <ul className='messages-list'>
                <div className='row justify-content-center'>
                  {nutretionData?.map((i) => {
                    return <PageCardCategory i={i} key={i.id} />;
                  })}
                </div>
                <li className='unread'>
                  <div className='header row'>
                    <div className='col-md-4'>
                      <img className='w-100' src={babySection2} alt='' />
                    </div>
                    <div className='col-md-8'>
                      {/* <span className="date"><i className="fas fa-cannabis"></i></span> */}
                      <div className='title'>
                        {/* <span className="from">01</span> */}
                        <span className='action'>
                          <i className='fa fa-star-o'></i>
                          <i className='fa fa-star bg'></i>
                        </span>
                        We represent European quality
                      </div>
                      <div className='description'>
                        The NutriBaby range is produced only in Poland, in the
                        heart of the European Union. We use only EU-origin
                        ingredients, purchased only at trusted sources. All the
                        ingredients, including milk, are carefully tested at our
                        laboratories before using them for production. Our
                        production facilities and processes are supervised by
                        the authorities and must always comply with strict EU
                        norms and food safety and quality regulations.
                      </div>
                    </div>
                  </div>
                </li>
                <li className='unread'>
                  <div className='header'>
                    {/* <span className="from">02</span> */}
                    <span className='date'>
                      <i className='fas fa-cannabis'></i>
                    </span>
                  </div>
                  <div className='title'>
                    <span className='action'>
                      <i className='fa fa-star-o'></i>
                      <i className='fa fa-star bg'></i>
                    </span>
                    Produced from fresh milk
                  </div>
                  <div className='description'>
                    Milk and whey, the core ingredients which we use, are always
                    fresh. We blend them together in appropriate proportion, add
                    other required ingredients and only then spray dry into the
                    powder form. Afterwards we add only auxiliary ingredients,
                    which are not suited for high-temperature processing.
                  </div>
                  <h4>The NutriBaby range</h4>
                  <ul className='text-capitalize'>
                    <li>
                      has always all the nutritional quality and quantity
                      maintained,
                    </li>
                    <li>
                      contains easily digestible, not deteriorated proteins,
                      which are highly bioavailable,
                    </li>
                    <li>
                      has good solubility and great organoleptic qualities
                      (taste, colour, smell),
                    </li>
                    <li>
                      is homogeneus (the nutrients are uniformly distributed).
                    </li>
                  </ul>
                </li>

                <li className='unread row'>
                  {/* <div className="header">
                    <span className="from">03</span>
                    <span className="date"><i className="fas fa-cannabis"></i></span>
                  </div> */}

                  <div className='col-md-8'>
                    <div className='title'>
                      <span className='action'>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star bg'></i>
                      </span>
                      Our experience
                    </div>
                    <div className='description'>
                      We have been supplying generations of children with our
                      formulas. No one would like to give their most precious
                      baby into the hands of an unexperienced stranger. When
                      choosing NutriBaby range, parents can are assured that
                      through our years-long experience and wide, global
                      presence, we know exactly what new-borns need and we
                      supply them exactly this. NutriBaby is always safe and
                      nutritionally complete
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <img src={babySection1} className='w-100' alt='' />
                  </div>
                </li>
                <li className='unread'>
                  {/* <div className="header">
                    <span className="from">04</span>
                    <span className="date"><i className="fas fa-cannabis"></i></span>
                  </div> */}
                  <div className='title'>
                    <span className='action'>
                      <i className='fa fa-star-o'></i>
                      <i className='fa fa-star bg'></i>
                    </span>
                    Our absolutely unique Online Quality Inspection™ tool
                  </div>
                  <div className='description'>
                    Our absolutely unique{" "}
                    <a href='https://qc.geo-poland.com/' className='tool'>
                      Online Quality Inspection™ tool
                    </a>{" "}
                    brings added value to parents feeding their baby with the
                    NutriBaby formula. They can easily verify the origin of the
                    NutriBaby product (its genuineness) and the quality. We are
                    proud of our products and have nothing to hide when it comes
                    to their quality.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

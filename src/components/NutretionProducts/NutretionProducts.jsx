import { useEffect, useState } from "react";
import PageCardCategory from "../PageCardCategory/PageCardCategory";
import nutriLogo from "./nutriLogo.jpg";
import babySection1 from "./babySection1.jpg";
import babySection2 from "./baby2.jpg";
import Data from "../../Database/ProductsInfo.json";
import "./NutritionProducts.css";
const NutretionProducts = () => {
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
                <div className='row justify-content-center py-3'>
                  {nutretionData?.map((i) => {
                    return <PageCardCategory i={i} key={i.id} />;
                  })}
                </div>
                <li className='unread py-3'>
                  <div className='header row'>
                    <div className='col-md-4'>
                      <img className='w-100' src={babySection2} alt='' />
                    </div>
                    <div className='col-md-8'>
                      <div className='title'>
                        <span className='action'>
                          <i className='fa fa-star-o'></i>
                          <i className='fa fa-star bg'></i>
                        </span>
                        Why choose NutriBaby baby milk?
                      </div>
                      <div className='description'>
                        We've been feeding babies for generations, helping them
                        to grow happily. We know how important it is to provide
                        the right nutrition at every stage of your baby's
                        development. For the first few months of life, your baby
                        will get all their nutrition from milk only. <br />{" "}
                        <br />
                        NutriBaby is a nutritionally complete, whey based infant
                        formula containing key vitamins and minerals. It can be
                        used for combination feeding or if baby is not being
                        breastfeed.
                      </div>
                    </div>
                  </div>
                </li>
                <li className='unread py-3'>
                  <div className='header'>
                    <span className='date'>
                      <i className='fas fa-cannabis'></i>
                    </span>
                  </div>
                  <div className='title'>
                    <span className='action'>
                      <i className='fa fa-star-o'></i>
                      <i className='fa fa-star bg'></i>
                    </span>
                    NutriBaby contains
                  </div>
                  <ul className='nutriUL'>
                    <li>
                      {" "}
                      <b>essential fatty acids</b> needed for normal growth and
                      development of children,
                    </li>
                    <li>
                      <b>lactose</b> , the sole source of galactose, a key
                      nutrient important for{" "}
                      <b>optimal development of the nervous system</b> and
                      myelination,
                    </li>
                    <li>
                      {" "}
                      <b>calcium</b> and <b>phosphorus</b> needed for normal{" "}
                      <b>growth and development of bones</b> in children,
                    </li>
                    <li>
                      <b>iron</b> contributing to normal{" "}
                      <b>cognitive development</b> of children,
                    </li>
                    <li>
                      <b>3 protein sources</b> – whey protein concentrate,
                      demineralized whey powder and skimmed milk powder –
                      scientifically balanced blend of essential amino acids
                      supporting <b>growth and development</b> ,
                    </li>
                    <li>
                      <b>Vitamine D</b> important for strong bones,teeth and
                      supports <b>immune system</b> .
                    </li>
                  </ul>
                </li>
                <li className='unread py-3 row'>
                  <div className='col-md-8'>
                    <div className='description__Nutri'>
                      Breastmilk is best for your baby during the first months
                      of life. It contains everything your baby needs for a
                      healthy development. Our nutritionists have therefore
                      developed NutriBaby infant formula according to the latest
                      research findings.
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <img src={babySection1} className='w-100' alt='' />
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
export default NutretionProducts;

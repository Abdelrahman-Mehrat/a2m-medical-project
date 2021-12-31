import "./Category.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import supplementImg from "../../assets/image/home/supplement category.png"
import cosmeticsImg from "../../assets/image/home/cosmetics category.jpg"
import milkImg from "../../assets/image/home/milk.jpg"

import { CardCategory } from "./CardCategory/CardCategory";
const Category = () => {
  const [mainCard, setMainCard] = useState([
    {
      id:1,
      name: "supplements",
      describe:"click here to go to supplements products",
      theLink:"SupplementProducts",
      img:`${supplementImg}`
    },
    {
      id:2,
      name: "Cosmetics",
      describe:"click here to go to Cosmetics products",
      theLink:"CosmeticsProducts",
      img:`${cosmeticsImg}`
    },
    {
      id:3,
      name: "Nutretion",
      describe:"click here to go to Nutretion products",
      theLink:"NutretionProducts",
      img:`${milkImg}`
    },
  ]);

  return (
    <div className="home__category py-4">
      <div className="container">
        <h2 className="pb-3">Category</h2>
        <div>
          <div className="row">
            {mainCard.map((singleCard) => {
              return (
                <div className="col-sm-4">
                <div className="px-5">
                  <Link to={`${singleCard.theLink}`}>
                    <CardCategory  name={singleCard.name} describe={singleCard.describe} img={singleCard.img} />
                  </Link>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

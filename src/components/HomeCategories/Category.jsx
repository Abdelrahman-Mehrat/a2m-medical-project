import { useState } from "react";
import { Link } from "react-router-dom";
import { CardCategory } from "./CardCategory";

const Category = () => {
  const [mainCard, setMainCard] = useState([
    {
      id:1,
      name: "supplements",
      describe:"click here to go to supplements products",
      theLink:"SupplementProducts",
      img:"https://via.placeholder.com/150"
    },
    {
      id:2,
      name: "Cosmetics",
      describe:"click here to go to Cosmetics products",
      theLink:"CosmeticsProducts",
      img:"https://via.placeholder.com/150"
    },
    {
      id:3,
      name: "Nutretion",
      describe:"click here to go to Nutretion products",
      theLink:"NutretionProducts",
      img:"https://via.placeholder.com/150"
    },
  ]);

  return (
    <div>
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

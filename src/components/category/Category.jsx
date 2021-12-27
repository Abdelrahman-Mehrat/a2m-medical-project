import { useState } from "react";
import { Link } from "react-router-dom";
import { CardCategory } from "./CardCategory";

const Category = () => {
  const [mainCard, setMainCard] = useState([
    {
      name: "supplements",
      describe:"click here to go to category2 products",
      theLink:"categoryOne",
      img:"https://via.placeholder.com/150"
    },
    {
      name: "Category2",
      describe:"click here to go to supplement products",
      theLink:"categoryTwo",
      img:"https://via.placeholder.com/150"
    },
  ]);

  return (
    <div>
      <div className="container">
        <h2 className="pb-3">Category</h2>
        {/* <div className="row">
          <div className="col-sm-6">
            <div className="px-5">
              <Link to={"/categoryOne"}>
                <CardCategory />
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="px-5">
              <Link to={"/categoryTwo"}>
                <CardCategory />
              </Link>
            </div>
          </div>
        </div> */}
        <div>
          <div className="row">
            {mainCard.map((singleCard) => {
              return (
                <div className="col-sm-6">
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

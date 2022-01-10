import { useState } from "react";
import { Link } from "react-router-dom";
import supplementImg from "../../assets/image/home/supplementcat.jpg";
import cosmeticsImg from "../../assets/image/home/cosmeticsCat.jpg";
import milkImg from "../../assets/image/home/nutriCat.jpg";
import { CardCategory } from "./CardCategory/CardCategory";
import "./Category.css";
const Category = () => {
  const [mainCard] = useState([
    {
      id: 1,
      name: "supplement products",
      // describe:"click here to go to supplement products",
      theLink: "SupplementProducts",
      img: `${supplementImg}`,
    },
    {
      id: 2,
      name: "Cosmetic products",
      // describe:"click here to go to Cosmitics products",
      theLink: "CosmeticsProducts",
      img: `${cosmeticsImg}`,
    },
    {
      id: 3,
      name: "Nutrition products",
      // describe:"click here to go to Nutrition products",
      theLink: "NutretionProducts",
      img: `${milkImg}`,
    },
  ]);

  return (
    <div className='home__category head__animation py-4'>
      <div className='container'>
        <h2 className='pb-3 section__header'>Category</h2>
        <div>
          <div className='row'>
            {mainCard.map((singleCard) => {
              return (
                <div key={singleCard.id} className=' col-sm-6 col-md-4 mx-auto'>
                  <div className='p-3 '>
                    <Link to={`${singleCard.theLink}`}>
                      <CardCategory
                        name={singleCard.name}
                        describe={singleCard.describe}
                        img={singleCard.img}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

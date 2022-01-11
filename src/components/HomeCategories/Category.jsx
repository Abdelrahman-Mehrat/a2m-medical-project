import { useState } from "react";
import { Link } from "react-router-dom";
import CardCategory from "./CardCategory/CardCategory";
import supplementImg from "../../assets/image/home/supplementcat.jpeg";
import pharmaImg from "../../assets/image/home/pharmacat.jpeg";
import cosmeticsImg from "../../assets/image/home/cosmeticsCat.jpeg";
import milkImg from "../../assets/image/home/nutriCat.jpeg";
import "./Category.css";
const Category = () => {
  const [mainCard] = useState([
    {
      id: 1,
      name: "Supplements Products",
      theLink: "SupplementProducts",
      img: { supplementImg },
    },
    {
      id: 2,
      name: "Cosmetics products",
      theLink: "CosmeticsProducts",
      img: { cosmeticsImg },
    },
    {
      id: 3,
      name: "Nutrition products",
      theLink: "NutretionProducts",
      img: { milkImg },
    },
    {
      id: 4,
      name: "Pharmaceuticals Drugs",
      theLink: "pharmaceuticalsProducts",
      img: { pharmaImg },
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
                <div key={singleCard.id} className=' col-sm-6 col-lg-3 mx-auto'>
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

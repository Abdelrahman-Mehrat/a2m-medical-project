import logoPic from "./logoPic.jpg";
import "./AboutUsMain.css";
const AboutUsMain = () => {
  return (
    <section className='Home__AboutUs head__animation py-4'>
      <div className='container '>
        <div className='row'>
          <div className=' col-md-8'>
            <div className='p-2'>
              <h2 className='section__header'>About us</h2>
              <p className='about-us'>
                A2M Medical is a leading pharmaceutical company in the Egyptian
                market, established in 2020. A2M Medical provides
                pharmaceuticals Drugs, babies nutrition formulas, nutraceuticals
                and cosmeceuticals that improve the life of the family and
                society, providing them with the best in terms of quality and
                cost in Egypt and the globe.
              </p>
            </div>
          </div>
          <div className='col-md-4 p-4 text-center'>
            <img src={logoPic} className=' w-100' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsMain;

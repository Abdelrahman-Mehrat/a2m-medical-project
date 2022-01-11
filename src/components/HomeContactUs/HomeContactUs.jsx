import googleMapPic from "./googlemap.jpg";
import "./HomeContactUs.css";
const HomeContactUs = () => {
  return (
    <section className='home__contactUs head__animation py-4'>
      <div className='container'>
        <h2 className='pb-3 section__header'>Contact us</h2>
        <div className='home__contactUs__body row'>
          {/* change icons from font awesome */}
          <div className='col-md-8'>
            <div className='phoneNumber'>
              <p>
                <span>icon</span> +20-01100810690
              </p>
              <p>
                <span>icon</span> +20-01100810690
              </p>
            </div>
            <div className='adress'>
              <p>
                <span>icon</span> 22 m Hadayek al-hram Menkaure Gate Giza
              </p>
            </div>
            <div className='location'>
              <p>location https://goo.gl/maps/Ny6ZJbFq9TSdemNPA</p>
            </div>
            <div className='email'>email :a2mmedical20@outlook.com</div>
          </div>
          <div className='col-md-4'>
            <img className='w-100 ' src={googleMapPic} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeContactUs;

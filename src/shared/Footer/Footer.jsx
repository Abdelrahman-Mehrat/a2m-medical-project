import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  return (
    // <section className="home__contactUs py-4">
    //     <div className="container">
    //         <h2 className="pb-3">Contact us</h2>
    //         <div className="home__contactUs__body">
    //             <div className="phoneNumber">
    //                 <div>
    //                     <span>icon</span>
    //                     <p>+20-01100810690</p>
    //                 </div>
    //                 <div>
    //                     <span>icon</span>
    //                     <p>+20-01100810690</p>
    //                 </div>
    //                 <div className="adress">
    //                     <span>icon</span>
    //                     <p>22 m Hadayek al-hram Menkaure Gate Giza</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
            <div className='block-7'>
              <h3 className='footer-heading mb-4 '>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quae reiciendis distinctio voluptates sed dolorum excepturi iure
                eaque, aut unde.
              </p>
            </div>
            <div class="col-lg-3 col-md-6  mx-auto mb-5 mb-lg-0">
              <h3 class="footer-heading mb-4">Quick Links</h3>
              <ul class="list-unstyled">
                <li><Link to="SupplementProducts">Supplement</Link></li>
                <li><Link to="CosmeticsProducts">Cosmetics</Link></li>
                <li> <Link to="NutretionProducts">Nutrition</Link> </li>               
              </ul>
            </div>
  
            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address"><i class="fas fa-map-marker-alt"></i><a href="https://goo.gl/maps/tSGQYZRP5PvbSNNu7">22 m Hadayek al-hram Menkaure Gate Giza</a></li>
                  <li class="phone"><i class="fas fa-phone-alt"></i><a href="tel://23923929210">+20-01100810690</a></li>
                  <li class="phone"><i class="fas fa-phone-alt"></i><a href="tel://23923929210">+20-01119998720</a></li>
                  <li class="email"><i class="fas fa-envelope"></i><a href="mailto: a2mmedical20@outlook.com">a2mmedical20@outlook.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

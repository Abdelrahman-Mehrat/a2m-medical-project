import { Link } from "react-router-dom";
import MapImage from "../../assets/image/home/location.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-6 mb-5 mb-lg-0'>
            <h3 className='footer-heading mb-4'>Quick Links</h3>
            <ul className='quick__liksList list-unstyled'>
              <li>
                <i className='fas fa-chevron-circle-right pe-2'></i>
                <Link to='SupplementProducts'>Supplement</Link>
              </li>
              <li>
                <i className='fas fa-chevron-circle-right pe-2'></i>
                <Link to='CosmeticsProducts'>Cosmetics</Link>
              </li>
              <li>
                <i className='fas fa-chevron-circle-right pe-2'></i>
                <Link to='NutretionProducts'>Nutrition</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='block-5 mb-5'>
              <h3 className='footer-heading mb-4'>Contact Info</h3>
              <ul className='list-unstyled'>
                <li className='address'>
                  <i className='fas fa-map-marker-alt'></i>
                  <Link to='https://goo.gl/maps/tSGQYZRP5PvbSNNu7'>
                    22 M Hadayek Al-hram Menkaure Gate Giza
                  </Link>
                </li>
                <li className='phone'>
                  <i className='fas fa-phone-alt'></i>
                  <Link to='tel://23923929210'>+20-01100810690</Link>
                </li>
                <li className='phone'>
                  <i className='fas fa-phone-alt'></i>
                  <Link to='tel://23923929210'>+20-01119998720</Link>
                </li>
                <li className='email'>
                  <i className='fas fa-envelope'></i>
                  <Link to='mailto: a2mmedical20@outlook.com'>
                    a2mmedical20@outlook.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-12 col-lg-6 mb-4 mb-lg-0'>
            <h3 className='footer-heading mb-4'>Map Location</h3>
            <figure className='mb-0'>
              <img className='w-100' src={MapImage} alt='' />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};

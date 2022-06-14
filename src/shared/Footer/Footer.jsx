import { Link } from "react-router-dom";
import MapImage from "../../assets/image/home/location.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Quick Links</h3>
            <ul className="quick__liksList list-unstyled">
              <li>
                <i className="fas fa-chevron-circle-right pe-2"></i>
                <Link to="SupplementProducts">Supplement</Link>
              </li>
              <li>
                <i className="fas fa-chevron-circle-right pe-2"></i>
                <Link to="CosmeticsProducts">Cosmetics</Link>
              </li>
              <li>
                <i className="fas fa-chevron-circle-right pe-2"></i>
                <Link to="nutretionproducts">Nutrition</Link>
              </li>
              <li>
                <i className="fas fa-chevron-circle-right pe-2"></i>
                <Link to="PharmaceuticalsProducts">Pharmaceuticals</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">
                  <i className="fas fa-map-marker-alt"></i>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/A2Mmedical/@29.9538623,31.1038839,19.83z/data=!4m5!3m4!1s0x14584f92e819c4bd:0x7d979ae4cdfe8de7!8m2!3d29.9539511!4d31.103792?hl=en-EG"
                  >
                    22 M Hadayek Al-hram Menkaure Gate Giza
                  </a>
                </li>
                <li className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+20-01100810690">+20-01100810690</a>
                </li>

                <li className="email">
                  <i className="fas fa-envelope"></i>

                  <a href="mailto:a2mmedical20@gmail.com">
                    a2mmedical20@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Map Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.02838881787136!2d31.103883916478615!3d29.95386230921724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f92e819c4bd%3A0x7d979ae4cdfe8de7!2sA2Mmedical!5e0!3m2!1sen!2seg!4v1655240081677!5m2!1sen!2seg"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

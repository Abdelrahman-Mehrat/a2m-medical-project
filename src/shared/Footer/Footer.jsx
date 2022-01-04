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
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
  
              <div class="block-7">
                <h3 class="footer-heading mb-4">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
                  sed dolorum excepturi iure eaque, aut unde.</p>
              </div>
  
            </div>
            <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 class="footer-heading mb-4">Quick Links</h3>
              <ul class="list-unstyled">
                <li><a href="#">Supplements</a></li>
                <li><a href="#">Vitamins</a></li>
                <li><a href="#">Diet &amp; Nutrition</a></li>
                <li><a href="#">Tea &amp; Coffee</a></li>
              </ul>
            </div>
  
            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address"><i class="fas fa-map-marker-alt"></i>22 m Hadayek al-hram Menkaure Gate Giza</li>
                  <li class="phone"><i class="fas fa-phone-alt"></i><a href="tel://23923929210">+20-01100810690</a></li>
                  <li class="email"><i class="fas fa-envelope"></i><a href="mailto: emailaddress@domain.com">emailaddress@domain.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
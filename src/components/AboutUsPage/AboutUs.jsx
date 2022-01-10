import "./AboutUs.css";
import slogan1Img from "../../assets/image/aboutUs/slogan-section.jpg";
import missionImg1 from "../../assets/image/aboutUs/ourMission.jpg";
import visionImg1 from "../../assets/image/aboutUs/Vision.png";
import innovationImg1 from "../../assets/image/aboutUs/innovation2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className='site-blocks-cover inner-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 mx-auto align-self-center'>
              <div className=' text-center'>
                <h2>About Us</h2>
                <p>
                  A2M Medical is a leading pharmaceutical company in the
                  Egyptian market, established in 2020. A2M Medical provides
                  Pharmaceuticals Drugs, Babies Nutrition formulas,
                  Nutraceuticals and Cosmeceuticals that improve the life of the
                  family and society, providing them with the best in terms of
                  quality and cost in Egypt and the globe.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='site-section  our__slogan bg-light custom-border-bottom py-5'
        data-aos='fade'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-5 slogan'>
              <div className='block-16'>
                <figure className='mb-0'>
                  <img src={slogan1Img} className='w-100' alt='' />
                </figure>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='site-section-heading'>
                <h3 className=''>Care You Deserve</h3>
              </div>
              <p>
                <span>This is the slogan of A2M medical </span>
                which reflects the real core of our goals and our sense of
                social responsibility as it is founded in our belief that every
                citizen has the right to live a good life and enjoy adequate
                health care and gets access to pharmaceutical products that are
                characterized with high quality. Therefore, all our products and
                services aim to enhancing such belief starting from the
                selection of our products through stages of production and
                marketing. This slogan also applies to all our employees, as we
                strive to create an ideal working atmosphere for our employees
                to motivate them to work actively and effectively to serve our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='site-section  bg-white custom-border-bottom py-4'
        data-aos='fade'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-7 mr-auto '>
              <div className='site-section-heading pt-3 mb-4'>
                <h3 className=''>Our vision</h3>
              </div>
              <p className='text-black fs-4'>
                "Our vision is to be a leading pharmaceutical company in Egypt
                and to become a significant global player by providing high
                quality, affordable and innovative solutions in medicine and
                treatment."
              </p>
            </div>
            <div className='col-md-5'>
              <figure>
                <img src={visionImg1} className='w-100' alt='' />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div
        className='site-section  our__mission custom-border-bottom py-4'
        data-aos='fade'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 slogan'>
              <div className='block-16'>
                <figure className='mb-0'>
                  <img src={missionImg1} className='w-100' alt='' />
                </figure>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='site-section-heading'>
                <h3 className=''>Mission</h3>
              </div>
              <p>
                We shall provide total customer satisfaction and achieve
                leadership in chosen markets, products and services across the
                globe, through excellence in technology, based on worldclass
                research and development. We will discover, develop and
                successfully market pharmaceutical products to prevent,
                alleviate and cure disease We are responsible to the society. We
                shall be good corporate citizens and will be driven by high
                ethical standards in our practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='site-section bg-light custom-border-bottom py-5'
        data-aos='fade'>
        <div className='container'>
          <div className=' site-section-heading text-center pb-5'>
            <h2>The 10 CORE VALUES of A2M Medical</h2>
          </div>
          <div className='row'>
            <div className='col-md-6  col-lg-4  mb-5'>
              <div className='block-38 '>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      1-Integrity & Trust
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Build open honest relationships Built upon unwavering
                      integrity, trust is the essence. We must uphold our
                      integrity and the trust placed in us in all actions we
                      take.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>
                    <h3 className='block-38-heading text-center h4'>
                      2-Teamwork{" "}
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Team means together everyone achieve more. At A2M Medical,
                      We believe teamwork is the key to delivering innovative
                      solutions that help everybody win.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5  text-center'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>
                    <h3 className=' block-38-heading  h4'>3-Innovation</h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Be creative, open-minded and thinking out of the box. We
                      believe true innovation is the combination of creativity,
                      openmindedness and deep understanding of the marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      4-Passion for Excellence
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      When the best is not enough We are passionate about
                      delivering the best results every time and are determined
                      to do even better the next time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38 '>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      5-Achievement
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      “greatest achievements are often directly related to
                      greatest challenges”….. Kirsty Allen{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      6-Quality
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Our concern is Quality not Quantity We believe that " When
                      quality is in our minds. The defect will stay behind
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      7-Fairness & honesty
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Treating others with fairness and honesty is like
                      the«rain»that helps them to grow and be fruitful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>

                    <h3 className='block-38-heading text-center h4'>
                      8-Motivation & Commitment
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      We believe that “ Motivation is what gets you started.
                      Commitment is what keeps you going.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38 '>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>
                    <h3 className='block-38-heading text-center h4'>
                      9-Personal Growth
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      Keeping growth and learning We are driven in the pursuit
                      of personal growth and learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6  col-lg-4 mb-5'>
              <div className='block-38'>
                <div className='block-38-img'>
                  <div className='block-38-header'>
                    <div className='d-flex justify-content-center'>
                      <img className=' imggggg' src={innovationImg1} alt='' />
                    </div>
                    <h3 className='block-38-heading text-center h4'>
                      10-Family & Loyalty
                    </h3>
                  </div>
                  <div className='block-38-body'>
                    <p>
                      A2M Medical is more than a Company,It's a Family. Loyalty
                      “Always staying true to our ideals and people”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;

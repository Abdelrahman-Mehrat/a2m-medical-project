import "./aboutUsMain.css";
import logoPic from "./logoPic.jpg"
const AboutUsMain = () => {
  return (
    <section className="Home__AboutUs py-4">
    <div className="container ">
      <div className="row">
        <div className="col-md-8">
          <div className="p-2">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              molestias eligendi minima velit. Facere, pariatur debitis
              consectetur esse deserunt accusantium adipisci tempora recusandae
              numquam, praesentium non, perferendis doloremque voluptates
              quidem.
            </p>
          </div>
        </div>
        <div className="col-md-4 p-4 text-center">
              <img src={logoPic} className="w-100" alt="" /> 
        </div>
      </div>
    </div>
    </section>
  );
};
export default AboutUsMain;

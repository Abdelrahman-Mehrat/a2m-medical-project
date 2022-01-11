import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { NavBar } from "./shared/NavBar/NavBar";
import HomePage from "./components/HomeComponents/HomePage";
import AboutUs from "./components/AboutUsPage/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { CosmeticsProducts } from "./components/CosmeticProducts/CosmeticsProducts";
import { NutretionProducts } from "./components/NutretionProducts/NutretionProducts";
import { SupplementProducts } from "./components/SupplementProducts/SupplementProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Footer } from "./shared/Footer/Footer";
import NotFound from "./components/AboutUsPage/NotFound/NotFound";
import { PharmaceuticalsProducts } from "./components/PharmaceuticalsProducts/PharmaceuticalsProducts";
import "./App.css";
function App() {


  return (
    <div>
    
        <BrowserRouter>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route
              path='/SupplementProducts'
              element={<SupplementProducts />}
            />
            <Route path='/CosmeticsProducts' element={<CosmeticsProducts />} />
            <Route path='/NutretionProducts' element={<NutretionProducts />} />
            <Route path='/:category/:name/:id' element={<ProductDetails />} />
            <Route path='/NutretionProducts' element={<NutretionProducts />} />
            <Route
              path='/PharmaceuticalsProducts'
              element={<PharmaceuticalsProducts />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
    
    
    </div>
  );
}

export default App;

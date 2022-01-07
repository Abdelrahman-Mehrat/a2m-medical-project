import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

import HomePage from "./components/HomeComponents/HomePage";
import { NavBar } from "./shared/NavBar/NavBar";
import AboutUs from "./components/AboutUsPage/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
// import { CategoryOne } from './components/category1/CategoryOne';
import { CosmeticsProducts } from "./components/CosmeticProducts/CosmeticsProducts";
import { SingleCard } from "./components/category1/single/SignleCard";
import { NutretionProducts } from "./components/NutretionProducts/NutretionProducts";
import { SupplementProducts } from "./components/SupplementProducts/SupplementProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Footer } from "./shared/Footer/Footer";
import NotFound from "./components/AboutUsPage/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/SupplementProducts' element={<SupplementProducts />} />
        <Route path='/CosmeticsProducts' element={<CosmeticsProducts />} />
        <Route path='/:id' element={<SingleCard />} />
        <Route path='/NutretionProducts' element={<NutretionProducts />} />
        <Route path='/:category/:name/:id' element={<ProductDetails />} />
        <Route path='/NutretionProducts' element={<NutretionProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

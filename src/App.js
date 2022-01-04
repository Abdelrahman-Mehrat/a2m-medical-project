import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomeComponents/HomePage";
import AboutUs from "./components/AboutUsPage/AboutUs";
import { NavBar } from "./shared/NavBar/NavBar";
// import { CategoryOne } from './components/category1/CategoryOne';
import { CosmeticsProducts } from "./components/CosmeticProducts/CosmeticsProducts";
import { SingleCard } from "./components/category1/single/SignleCard";
import { NutretionProducts } from "./components/NutretionProducts/NutretionProducts";
import { SupplementProducts } from "./components/SupplementProducts/SupplementProducts";
import { Footer } from "./shared/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/SupplementProducts' element={<SupplementProducts />} />
        <Route path='/CosmeticsProducts' element={<CosmeticsProducts />} />
        <Route path='/:id' element={<SingleCard />} />
        <Route path='/NutretionProducts' element={<NutretionProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

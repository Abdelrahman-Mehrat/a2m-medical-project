import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import { AmNav } from './components/AmNav';
import { CategoryOne } from './components/category1/CategoryOne';
import { CategoryTwo } from './components/category2/CategoryTwo';
import { SingleCard } from './components/category1/single/SignleCard';
function App() {
  return (
    <BrowserRouter >
    <AmNav/>
    <Routes>
    <Route path="/"element={<HomePage/>} />
    <Route path="/about"element={<AboutUs/>} />
    <Route path="/categoryOne"element={<CategoryOne/>} />
    <Route path="/categoryTwo"element={<CategoryTwo/>} />
    <Route path="/:id"element={<SingleCard/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

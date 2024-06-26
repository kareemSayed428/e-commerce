//import logo from './logo.svg';
//import './App.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ExampleCounter from "./Components/Test";
import { Routes, Route } from 'react-router-dom';
import MenClothes from "./Components/Category/man/MenClothes";
import Single from "./Components/Category/man/Single";
import RedexForProduct from "./Components/Redex/RedexForProduct";

function App() {
  return (
    <div className="App">
      
    <Navbar></Navbar>
    

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="MenClothes" element={<MenClothes></MenClothes>}></Route>
      <Route path="Details/:Id" element={<Single></Single>}></Route>
      <Route path="RedexForProduct" element={<RedexForProduct></RedexForProduct>}></Route>
    </Routes>

    

    </div>
  );
}

export default App;

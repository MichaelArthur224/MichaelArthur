import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Work from "./work";
import DataSci from "./data-science";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router(){
    return (
        <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default Router;
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Work from "./components/work.jsx";
import Data from "./components/data.jsx";
import Swe from "./components/swe.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";
import { Route, Routes } from "react-router-dom";

function App(){
    return (
    <>
    <Navbar />
        <div className = "container">
            <Routes>
            <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/data" element={<Data />} />
                <Route path="/swe" element={<Swe />} />\
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
       
    </>
    );
}

export default App;
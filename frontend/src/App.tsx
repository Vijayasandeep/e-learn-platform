import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services.tsx";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <>
         <Router >
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        </>
       
    );
}

export default App;
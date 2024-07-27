import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes, Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                {/*<ScrollToTop />*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

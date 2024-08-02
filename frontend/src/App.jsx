import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes, Navigate
} from "react-router-dom";
import "./Styles/style.css";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFount/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/Django-Portfolio" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

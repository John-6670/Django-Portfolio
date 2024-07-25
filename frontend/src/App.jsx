import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <NavBar />
                {/*<ScrollToTop />*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route path="/project" element={<Projects />} />*/}
                    {/*<Route path="/resume" element={<Resume />} />*/}
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";

const App = (): JSX.Element => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage title="Welcome!" paragraph="To this example" />} />
                    <Route path="/about" element={<AboutPage title="About Page" paragraph="..." />} />
                    <Route path="/contact" element={<ContactPage title="Contact" paragraph="..." />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

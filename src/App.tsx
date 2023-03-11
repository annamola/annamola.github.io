import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
const App = (): JSX.Element => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage title="Welcome!" paragraph="To this example" />} />
                        <Route path="/about" element={<AboutPage title="About Page" paragraph="..." />} />
                        <Route path="/contact" element={<ContactPage title="Contact" paragraph="..." />} />
                        <Route path="/art" element={<ContactPage title="art" paragraph="..." />} />
                        <Route path="/zine" element={<ContactPage title="zine" paragraph="..." />} />
                        <Route path="/web-design" element={<ContactPage title="web" paragraph="..." />} />
                        <Route path="/mobile-app-design" element={<ContactPage title="mobile" paragraph="..." />} />
                        <Route path="/this-website" element={<ContactPage title="mobile" paragraph="..." />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;

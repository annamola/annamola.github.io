import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, ContactPage, ArtPage, ZinePage, ErrorPage } from "./pages/index";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
import en from "./translations/en.json";

Amplify.configure(aws_exports);

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage title="Welcome!" paragraph="To this example" />} />
            <Route path="/about" element={<AboutPage title={en.ABOUT.TITLE} paragraph="To this example" />} />
            <Route
                path="/contact"
                element={
                    <ContactPage
                        title="contact me !!"
                        paragraph="Whether you have questions, feedback, or just want to say hello, I'd love to hear from you. Please use the contact form below to reach out, and I'll ensure a prompt response. Your thoughts and inquiries are important, and I value the opportunity to engage with visitors. Feel free to connect with me on social media via the links in the header. Looking forward to connecting with you soon!"
                    />
                }
            />
            <Route path="/art" element={<ArtPage title="art" paragraph="..." />} />
            <Route path="/zine" element={<ZinePage title="zine" paragraph="..." />} />
            <Route path="/web-design" element={<ContactPage title="web" paragraph="..." />} />
            <Route path="/mobile-app-design" element={<ContactPage title="mobile" paragraph="..." />} />
            <Route path="/this-website" element={<ContactPage title="mobile" paragraph="..." />} />
            <Route path="*" element={<ErrorPage title="Error" paragraph="..." />} />
        </Routes>
    );
};

export default App;

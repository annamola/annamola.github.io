import React, { FunctionComponent } from "react";
import Header from "../Header/Header";
import HeaderOffset from "../Header/HeaderOffset";
import Footer from "../Footer/Footer";

type AboutPageProps = {
    title: string;
    paragraph: string;
};

const AboutPage: FunctionComponent<AboutPageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <Header />
            <div>
                <HeaderOffset />
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;

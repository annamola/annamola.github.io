import React from "react";
import "./ArtPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import { PageProps } from "../types/PageProps.type";

const ArtPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <Header />
            <HeaderOffset />
            <div className="zine-page-body">
                <h2>{title}</h2>
            </div>
            <Footer />
        </div>
    );
};

export default ArtPage;

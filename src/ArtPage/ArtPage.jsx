// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./ArtPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import deskBackground from "../assets/images/pexels-fwstudio-172296.jpg";
import { Storage } from "aws-amplify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ArtPage = ({ title, paragraph }) => {
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

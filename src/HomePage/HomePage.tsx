import React, { FunctionComponent } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import frame from "../assets/images/frame.webp";

type HomePageProps = {
    title: string;
    paragraph: string;
};

const HomePage: FunctionComponent<HomePageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div className="home-page-body">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <img src={frame} alt="Logo"></img>
            </div>
        </div>
    );
};

export default HomePage;

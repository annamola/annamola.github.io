import React, { FunctionComponent } from "react"; // importing FunctionComponent
import "./HomePage.css";
import Header from "../Header/Header";

type HomePageProps = {
    title: string;
    paragraph: string;
};

const HomePage: FunctionComponent<HomePageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <header className="home-page-header">
                <Header />
            </header>
            <div className="home-page-body">
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default HomePage;

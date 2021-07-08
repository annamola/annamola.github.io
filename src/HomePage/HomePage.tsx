import React, { FunctionComponent } from "react"; // importing FunctionComponent
import "./HomePage.css";

type HomePageProps = {
    title: string;
    paragraph: string;
};

export const HomePage: FunctionComponent<HomePageProps> = ({
    title,
    paragraph,
}) => (
    <div>
        <header className="home-page-header">
            <div className="header-container">
                <input type="checkbox" name="" id="check" />
                <div className="logo-container">
                    <div className="console-container">
                        <a href="index.html">
                            <span id="text"></span>
                            <div className="console-underscore" id="console">
                                &#95;
                            </div>
                        </a>
                    </div>
                </div>
                <div className="nav-btn">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link-custom">
                                <a href="about.html">About</a>
                            </li>
                            <li className="nav-link-custom">
                                <a href="/">
                                    Portfolio
                                    <i className="fas fa-caret-down"></i>
                                </a>
                                <div className="dropdown-btn">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="art.html">Art</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="zine.html">Zine</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="websites.html">Websites</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="programming.html">
                                                Programming
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link-custom">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/moladesk/">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/anna-mola-b90581104/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/annamola/">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
        <div className="home-page-body">
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
);

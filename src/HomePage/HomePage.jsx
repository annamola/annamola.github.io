// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from "react";
import "./HomePage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import self from "../assets/images/IMG_6972_crop.jpg";
import selfNoBg from "../assets/images/anna-tea.png";
import teapot from "../assets/images/teapot.png";
import teapotCrop from "../assets/images/teapot-crop.png";
import HeaderOffset from "../Header/HeaderOffset";
import { Grid } from "@mui/material";
import { Storage } from "aws-amplify";

const HomePage = ({ title, paragraph }) => {
    const [frame, setFrame] = useState();

    useEffect(() => {
        fetchFrame();
    }, []);

    async function fetchFrame() {
        const frame = await Storage.get("assets/images/frame.webp", {
            level: "public",
        });
        setFrame(frame);
    }

    return (
        <div>
            <Header />
            <div className="home-page-body">
                <HeaderOffset />
                {/* <h2>{title}</h2>
                <div className="frame-on-image">
                    <img src={frame} alt="Frame" className="frame" />
                    <img src={self} alt="Anna Mola" className="image" />
                    <div className="white-background "></div>
                </div> */}
                <div className="home-page-body-visual">
                    <div className="inner image-container">
                        <img src={selfNoBg} alt="Anna Mola" className="image self" />
                        {/* <img src={teapot} alt="teapot" className="image teapot" /> */}
                        <div className="teapot-container">
                            <img src={teapotCrop} alt="teapot" className="teapot-crop" />
                        </div>

                        <div className="tea-steam-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // x="0px"
                                // y="0px"
                                viewBox="0 0 200 200"
                                xmlSpace="preserve"
                                enableBackground={"new 0 0 200 200"}
                            >
                                <path
                                    d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                />
                            </svg>
                        </div>
                        <div className="tea-steam-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // x="0px"
                                // y="0px"
                                viewBox="0 0 200 200"
                                xmlSpace="preserve"
                                enableBackground={"new 0 0 200 200"}
                            >
                                <path
                                    d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                />
                            </svg>
                        </div>
                        <div className="tea-steam-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                // x="0px"
                                // y="0px"
                                viewBox="0 0 200 200"
                                xmlSpace="preserve"
                                enableBackground={"new 0 0 200 200"}
                            >
                                <path
                                    d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="inner">
                        <h1>Welcome!</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

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
                        <div className="teapot-steam-1">
                            <svg
                                width="104"
                                height="172"
                                viewBox="0 0 104 172"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                overflow={"visible"}
                            >
                                <path
                                    d="M1.8252 170.246C3.62471 168.626 4.44512 167.231 5.82685 165.208C9.67054 159.58 13.7083 154.076 17.9033 148.701C21.5821 143.987 24.6426 139.61 23.6557 133.195C22.68 126.853 19.6428 123.76 14.3304 121.154C10.8211 119.432 6.62256 117.019 5.82685 112.722C5.13431 108.982 3.60621 103.776 4.54061 100.038C5.64291 95.6288 8.71713 90.1623 11.1862 86.2823C13.6522 82.4072 15.7446 79.1606 19.1181 76.0281C20.6437 74.6114 23.4044 72.7425 24.5846 71.1689C28.1891 66.3629 32.0627 65.5989 37.3756 62.844C42.2386 60.3225 46.1034 56.1536 49.8093 52.1253C52.7762 48.9004 55.2723 43.2057 59.0632 41.1208C65.1834 37.7546 74.0763 33.8731 80.8579 35.0468C84.3381 35.6492 93.3966 37.6838 96.3286 35.1183C98.7315 33.0158 100.627 29.6276 101.867 26.7934C103.053 24.081 102.607 19.0266 99.0083 17.9683C97.1348 17.4173 96.1354 15.9771 94.1491 15.896C92.2532 15.8186 89.2231 15.4611 87.4321 14.9671C82.722 13.6678 90.7022 8.76019 91.8625 7.53543C93.103 6.22595 94.3948 5.31897 95.8641 4.31981C97.0617 3.50544 96.6434 2.2509 97.6506 1.74731"
                                    stroke="black"
                                    strokeWidth={0}
                                    id="teapot-steam-1"
                                />
                                {Array(20)
                                    .fill(0)
                                    .map((_, i) => (
                                        <circle key={`dot_${i}`} cx="" cy="" r="3" fill="#529fd9">
                                            <animateMotion begin={`${i / 2}s`} dur="10s" repeatCount="indefinite">
                                                <mpath xlinkHref="#teapot-steam-1"></mpath>
                                            </animateMotion>
                                        </circle>
                                    ))}
                            </svg>
                        </div>
                        <div className="teapot-steam-2">
                            <svg
                                width="192"
                                height="167"
                                viewBox="0 0 192 167"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                overflow={"visible"}
                            >
                                <path
                                    d="M190.116 10.2529C189.046 10.146 188.287 9.56244 187.472 8.89519C184.828 6.73205 181.948 5.72011 178.682 4.82208C176.982 4.35456 176.04 3.82577 174.681 2.82125C173.489 1.94018 170.573 2.53542 169.178 2.53542C159.09 2.53542 150.804 9.55607 146.776 18.5063C144.408 23.7695 153.457 30.297 153.457 35.8349C153.457 42.9223 150.587 43.7443 145.597 47.6255C138.918 52.8203 129.787 56.6937 121.301 57.1652C113.755 57.5844 103.95 55.8954 98.6491 50.1265C95.7975 47.0233 88.7871 45.1243 84.7862 43.8382C79.7718 42.2265 70.8949 46.986 68.8868 51.4485C67.8361 53.7833 65.5687 57.2978 66.2785 59.8449C67.6092 64.6197 69.8557 68.0051 71.7808 72.4215C75.0147 79.8404 71.9936 86.1345 66.2428 91.0006C61.8716 94.6993 52.1969 92.856 47.9138 90.3575C44.0284 88.091 36.8633 86.9396 33.8365 91.1435C31.0114 95.0673 28.6915 99.0476 28.6915 104.113C28.6915 106.928 30.5447 108.689 30.6209 111.509C30.6993 114.409 29.9237 117.252 28.1913 119.584C25.2584 123.532 21.1654 125.895 17.7942 129.266C14.4832 132.577 11.9678 136.098 9.39784 140.021C6.74642 144.068 6.82535 146.712 6.82535 151.454C6.82535 153.434 7.12446 155.726 6.68243 157.671C6.24219 159.608 4.25784 164.601 2.32349 165.246"
                                    stroke="black"
                                    strokeWidth={0}
                                    id="teapot-steam-2"
                                />
                                {Array(30)
                                    .fill(0)
                                    .map((_, i) => (
                                        <circle key={`dot_${i}`} cx="" cy="" r="4" fill="#529fd9">
                                            <animateMotion
                                                begin={`${i / 3}s`}
                                                dur="10s"
                                                repeatCount="indefinite"
                                                keyPoints="1;0"
                                                keyTimes="0;1"
                                            >
                                                <mpath xlinkHref="#teapot-steam-2"></mpath>
                                            </animateMotion>
                                        </circle>
                                    ))}
                            </svg>
                        </div>
                        <div className="teapot-steam-3">
                            <svg
                                width="146"
                                height="110"
                                viewBox="0 0 146 110"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                overflow={"visible"}
                            >
                                <path
                                    d="M2.11157 107.532C2.11157 102.547 6.34481 95.0344 9.29312 91.1322C11.9895 87.5635 15.3221 83.396 18.6899 80.4492C22.0757 77.4866 24.2409 73.7271 27.1934 70.3022C30.694 66.2415 34.2807 59.9444 38.6267 56.7251C40.9746 54.986 42.1368 52.1219 44.8435 50.7941C47.6485 49.4181 52.5364 46.273 55.6695 47.5785C61.3664 49.9522 64.1932 55.0468 68.4247 58.9761C74.579 64.6907 79.1323 58.7333 82.502 53.438C84.294 50.622 84.9718 47.2526 86.7895 44.3629C89.3856 40.2357 91.7395 35.9793 94.2211 31.7862C96.3849 28.1302 98.7467 24.481 102.082 21.8535C103.152 21.0104 104.158 20.2063 105.154 19.2811C108.419 16.2496 115.071 16.861 119.124 16.9587C123.745 17.07 123.629 18.8964 126.592 21.4963C128.288 22.9851 128.545 23.2827 130.772 23.2827C134.154 23.2827 136.853 21.2884 139.097 18.7808C140.267 17.4727 141.607 15.8471 142.491 14.3504C143.192 13.1636 142.876 11.7836 143.599 10.5632C144.349 9.29747 144.632 4.6654 143.456 3.4888C142.895 2.92751 141.449 3.52227 141.133 2.41693C141.066 2.17966 141.669 1.21311 141.669 2.70276"
                                    stroke="black"
                                    strokeWidth={0}
                                    id="teapot-steam-3"
                                />
                                {Array(30)
                                    .fill(0)
                                    .map((_, i) => (
                                        <circle key={`dot_${i}`} cx="" cy="" r="5" fill="#529fd9">
                                            <animateMotion begin={`${i / 2}s`} dur="10s" repeatCount="indefinite">
                                                <mpath xlinkHref="#teapot-steam-3"></mpath>
                                            </animateMotion>
                                        </circle>
                                    ))}
                            </svg>
                        </div>
                        <div className="teapot-steam-4">
                            <svg
                                width="83"
                                height="107"
                                viewBox="0 0 83 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                overflow={"visible"}
                            >
                                <path
                                    d="M1.54272 105.461C2.271 97.4502 9.35576 92.2842 14.4052 86.8464C21.4794 79.2281 31.264 76.15 41.8451 77.2353C44.4669 77.5042 48.362 79.6245 50.8489 77.8784C54.4906 75.3214 56.235 74.0942 57.9947 69.9465C59.8572 65.5564 61.2928 60.7187 62.6394 56.1551C63.6508 52.7276 62.9754 49.2821 63.4255 45.7937C64.1569 40.1253 60.1555 31.3989 65.2477 27.286C68.3512 24.7793 71.3154 21.8087 74.5372 19.6043C77.2989 17.7147 78.8019 14.7792 79.8609 11.7081C80.6192 9.50892 80.6469 7.2899 80.6469 4.99108C80.6469 4.3016 81.29 1.04686 81.29 3.20463"
                                    stroke="black"
                                    strokeWidth={0}
                                    id="teapot-steam-4"
                                />
                                {Array(30)
                                    .fill(0)
                                    .map((_, i) => (
                                        <circle key={`dot_${i}`} cx="" cy="" r="2" fill="#529fd9">
                                            <animateMotion begin={`${i / 3}s`} dur="10s" repeatCount="indefinite">
                                                <mpath xlinkHref="#teapot-steam-4"></mpath>
                                            </animateMotion>
                                        </circle>
                                    ))}
                            </svg>
                        </div>
                        <div className="teapot-steam-5">
                            <svg
                                width="193"
                                height="116"
                                viewBox="0 0 193 116"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                overflow={"visible"}
                            >
                                <path
                                    d="M1.97021 113.889C2.19125 109.91 7.56476 104.16 10.9739 102.455C13.4307 101.227 14.4272 98.5178 17.4052 97.5606C24.8962 95.1527 34.692 98.6696 42.1654 99.0255C47.2086 99.2656 56.5785 96.84 60.7088 99.74C64.4598 102.374 67.7547 104.527 72.3565 105.028C77.8354 105.625 81.0473 107.424 86.4695 105.85C90.937 104.553 95.5488 102.398 99.0818 99.4542C103.029 96.1647 103.584 91.4557 103.584 86.2344C103.584 80.1124 105.876 77.5112 110.015 73.372C112.959 70.4277 121.134 69.3048 125.057 70.2278C128.257 70.9808 129.828 75.2972 132.524 76.9449C138.886 80.8326 148.899 79.2092 153.462 72.8718C157.426 67.3657 156.595 64.9362 151.461 61.0097C145.412 56.3845 136.369 56.511 135.776 46.7181C135.297 38.8146 140.598 33.6418 147.316 30.2827C151.08 28.4006 155.409 28.8546 159.142 30.64C161.848 31.9339 163.053 35.4277 166.61 35.4277C170.958 35.4277 178.527 34.6776 179.508 29.2823C180.311 24.8633 181.055 22.686 179.615 18.2063C178.437 14.5408 178.542 6.59747 183.081 5.2009C184.549 4.74913 187.387 2.71963 188.619 2.6284C192.187 2.36408 189.762 1.31082 189.762 3.27153"
                                    stroke="black"
                                    strokeWidth={0}
                                    id="teapot-steam-5"
                                />

                                {Array(30)
                                    .fill(0)
                                    .map((_, i) => (
                                        <circle key={`dot_${i}`} cx="" cy="" r="2.5" fill="#529fd9">
                                            <animateMotion begin={`${i / 3}s`} dur="10s" repeatCount="indefinite">
                                                <mpath xlinkHref="#teapot-steam-5"></mpath>
                                            </animateMotion>
                                        </circle>
                                    ))}
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

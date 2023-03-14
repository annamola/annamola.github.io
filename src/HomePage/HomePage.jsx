// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import self from "../assets/images/IMG_6972_crop.jpg";
import HeaderOffset from "../Header/HeaderOffset";
import { Grid } from "@mui/material";
import P5Test from "../p5Test/p5Test";
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
        console.log(frame);
        setFrame(frame);
    }

    return (
        <div>
            <Header />
            <div className="home-page-body">
                <HeaderOffset />
                <Grid
                    container
                    // className={classes.root}
                >
                    <Grid item md={6}>
                        <h2>{title}</h2>
                        <div className="frame-on-image">
                            <img src={frame} alt="Frame" className="frame" />
                            <img src={self} alt="Anna Mola" className="image" />
                            <div className="white-background "></div>
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <p>{paragraph}</p>
                        {/* <P5Test /> */}
                    </Grid>
                </Grid>
                <HeaderOffset />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

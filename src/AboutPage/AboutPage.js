import React, { FunctionComponent } from "react";
import Header from "../Header/Header";
import HeaderOffset from "../Header/HeaderOffset";
import Footer from "../Footer/Footer";
import { Grid } from "@mui/material";
import en from "../translations/en.json";

const AboutPage = ({ title }) => {
    return (
        <div>
            <Header />
            <div>
                <HeaderOffset />
            </div>
            <Grid container sx={{ minHeight: "calc(100vh - 7rem)" }}>
                <Grid item md={6}>
                    <h2>{title}</h2>
                    <div className="frame-on-image">
                        <div className="white-background ">asdasd</div>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <p>{en.ABOUT.ABOUT_ME_PARAGRAPH}</p>
                    <p>{en.ABOUT.ABOUT_ME_TEXT}</p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AboutPage;

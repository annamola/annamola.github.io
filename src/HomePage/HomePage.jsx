import React from "react";
import "./HomePage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import { HomePageVisual } from "./HomePageVisual";
import { Grid } from "@mui/material";

//https://codepen.io/brettsnaidero/pen/aBmmop

const HomePage = ({ title, paragraph }) => {
    return (
        <div>
            <Header />
            <div className="home-page-body">
                <HeaderOffset />
                <Grid container spacing={2}>
                    <Grid item xs={0} sm={0} md={2} lg={2} xl={3} />
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
                        <HomePageVisual />
                    </Grid>
                    <Grid item xs={0} sm={0} md={2} lg={2} xl={3} />
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

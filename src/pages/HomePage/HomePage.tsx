import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { HomePageVisual } from "./HomePageVisual";
import { Grid } from "@mui/material";
import { PageProps } from "../../types/PageProps.type";

//https://codepen.io/brettsnaidero/pen/aBmmop

const HomePage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
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

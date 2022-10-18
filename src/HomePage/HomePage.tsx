import React, { FunctionComponent } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import frame from "../assets/images/frame.webp";
import self from "../assets/images/IMG_2578asd.jpg";
import HeaderOffset from "../Header/HeaderOffset";
import { IGEmbed } from "react-ig-embed";
import { Grid, makeStyles } from "@material-ui/core";

type HomePageProps = {
    title: string;
    paragraph: string;
};
const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    ig: {
        height: 100,
    },
});

const HomePage: FunctionComponent<HomePageProps> = ({ title, paragraph }) => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <div className="home-page-body">
                <HeaderOffset />
                <Grid container className={classes.root}>
                    <Grid item md={6}>
                        <h2>{title}</h2>
                    </Grid>
                    <Grid item md={6}>
                        <p>{paragraph}</p>
                    </Grid>
                </Grid>
                <HeaderOffset />

                <div className="frame-on-image">
                    <img src={frame} alt="Frame" className="frame"></img>
                    <img src={self} alt="Anna Mola" className="image"></img>
                </div>
                <IGEmbed url="https://www.instagram.com/p/CiN4K8FOHff/" />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

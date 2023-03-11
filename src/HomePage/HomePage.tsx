import React, { FunctionComponent } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import frame from "../assets/images/frame.webp";
import self from "../assets/images/IMG_6972_crop.jpg";
import HeaderOffset from "../Header/HeaderOffset";
import { Grid } from "@mui/material";
import P5Test from "../p5Test/p5Test";

type HomePageProps = {
    title: string;
    paragraph: string;
};
// const useStyles = makeStyles({
//     root: {
//         display: "flex",
//     },
//     ig: {
//         height: 100,
//     },
// });

const HomePage: FunctionComponent<HomePageProps> = ({ title, paragraph }) => {
    // const classes = useStyles();
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
                        <P5Test />
                    </Grid>
                </Grid>
                <HeaderOffset />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;

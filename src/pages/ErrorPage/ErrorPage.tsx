import React from "react";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { PageProps } from "../../types/PageProps.type";

const ErrorPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <Header />
            <div>
                <HeaderOffset />
            </div>
            <Grid container sx={{ minHeight: "calc(100vh - 7rem)" }}>
                <Grid
                    item
                    xs={12}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                >
                    <h2>{title}</h2>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default ErrorPage;

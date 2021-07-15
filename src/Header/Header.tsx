import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react"; // importing FunctionComponent
import "./Header.css";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        display: "flex",
        alignContent: "center",
    },
    menu: {
        backgroundColor: "red",
        textAlign: "center",
    },
});

const Header: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={9} sm={10} md={3}>
                <AnimatedLogo></AnimatedLogo>
            </Grid>
            <Hidden smDown>
                <Grid item sm={1} md={2} className={classes.menu}>
                    <p>about</p>
                </Grid>
                <Grid item sm={1} md={2} className={classes.menu}>
                    <p>portfolio</p>
                </Grid>
                <Grid item sm={1} md={2} className={classes.menu}>
                    <p>contact</p>
                </Grid>
            </Hidden>
            <Grid item xs={3} sm={2} md={3}>
                <Hidden mdUp>
                    <p>hamburger</p>
                </Hidden>
                <Hidden smDown>
                    <p>social</p>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default Header;

import { Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import "./Header.css";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Turn as Hamburger } from "hamburger-react";

const useStyles = makeStyles({
    root: {
        maxWidth: "65rem",
        padding: " 0 2rem",
        margin: " 0 auto",
        position: "relative",
        height: "5rem",
        display: "flex",
        backgroundColor: "white",
        zIndex: 1000,
        alignContent: "center",
    },
    menu: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.15rem",
        cursor: "pointer",
        "& p:after": {
            content: "''",
            display: "block",
            height: 2,
            position: "relative",
            background: "tomato",
            transition: "width 0.6s ease 0s, left 0.6s ease 0s",
            width: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
            marginTop: 2,
        },
        "& p:hover:after": {
            width: "100%",
            left: "50%",
            transform: "translate(-50%, 0)",
        },
    },
    socialsContainer: {
        display: "flex",
        justifyContent: "center",
    },
    socials: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        columnGap: "20px",
    },
    icon: {
        color: "black",
        fontSize: 35,
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "tomato",
            transition: "color 0.2s ease-in-out",
        },
    },
});

const Header: React.FunctionComponent = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = React.useState(false);
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
            <Grid item xs={3} sm={2} md={3} className={classes.socialsContainer}>
                <Hidden mdUp>
                    <Hamburger rounded toggled={isOpen} toggle={setOpen} />
                    <div className={`banner large ${isOpen ? "toggled" : ""} side-bar`}>
                        WOAH!!!! NOT HIDDEN ANYMORE
                    </div>
                </Hidden>
                <Hidden smDown>
                    <div className={classes.socials}>
                        <a href="https://www.instagram.com/moladesk/">
                            <FontAwesomeIcon icon={faInstagramSquare} className={classes.icon} />
                        </a>
                        <a href="https://www.linkedin.com/in/anna-mola-b90581104/">
                            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
                        </a>
                        <a href="https://github.com/annamola/">
                            <FontAwesomeIcon icon={faGithubSquare} className={classes.icon} />
                        </a>
                    </div>
                </Hidden>
            </Grid>
        </Grid>
    );
};

export default Header;

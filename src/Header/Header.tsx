import { Box } from "@mui/material";
import Grid, { GridProps } from "@mui/material/Grid";
import Button, { ButtonProps } from "@mui/material/Button";
import React, { useLayoutEffect } from "react";
import HeaderOffset from "./HeaderOffset";
import "./Header.css";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { COLORS } from "../theme/theme";
import { styled } from "@mui/material/styles";

const HeaderGrid = styled(Grid)<GridProps>(({ theme }) => ({
    maxWidth: "65rem",
    padding: "0 2rem",
    margin: "0 auto",
    height: "5rem",
    display: "flex",
    backgroundColor: "white",
    zIndex: "1000",
    alignContent: "center",
}));
const MenuGridItem = styled(Grid)<GridProps>(({ theme }) => ({
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.15rem",
    cursor: "pointer",
    "& > a": {
        color: "black",
    },
    "& > a:before": {
        content: "''",
        marginTop: 5,
        display: "block",
    },
    "& > a:after": {
        content: "''",
        display: "block",
        height: 2,
        position: "relative",
        background: COLORS.main,
        transition: "width 0.6s ease 0s, left 0.6s ease 0s",
        width: 0,
        left: "50%",
        transform: "translate(-50%, 0)",
        marginTop: 2,
        marginBottom: 5,
    },
    "& > a:hover:after": {
        width: "100%",
        left: "50%",
        transform: "translate(-50%, 0)",
    },
}));
const DropdownBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    position: "absolute",
    top: 60,
    right: 0,
    width: "10rem",
    height: 40,
    border: "2px solid" + COLORS.main,
    zIndex: 101,
    borderRadius: 0,
    "&:hover": {
        backgroundColor: COLORS.main,
    },
}));

const SideBarBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: 0,
    width: "100%",
    height: 70,
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 40,
    color: "black",
    fontFamily: "Roboto Slab",
    textTransform: "lowercase",
    fontSize: 18,
    fontWeight: 400,
    "&:hover": {
        backgroundColor: "rgb(20, 120, 74, 0.2)",
    },
}));

const Header: React.FunctionComponent = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [isSideBarDropdownOpen, setSideBarDropdownOpen] = React.useState(false);
    const [isOverButton, setOverButton] = React.useState(false);
    const [isOverList, setOverList] = React.useState(false);
    const [listOpen, setListOpen] = React.useState(false);

    useLayoutEffect(() => {
        if (listOpen && !isOverButton && !isOverList) {
            setListOpen(false);
        } else if (!listOpen && (isOverButton || isOverList)) {
            setListOpen(true);
        }
    }, [isOverButton, isOverList, listOpen]);

    const dropdownOpts = ["art", "zine", "web design", "mobile app design"];
    return (
        <div className="header">
            <HeaderGrid container>
                <Grid item xs={9} sm={10} md={3}>
                    <AnimatedLogo />
                </Grid>
                <Box sx={{ display: { xs: "none", md: "contents" } }}>
                    <MenuGridItem item sm={1} md={2}>
                        <Link to="/about">about</Link>
                    </MenuGridItem>
                    <MenuGridItem item sm={1} md={2}>
                        <Link
                            to="/"
                            onMouseEnter={() => {
                                setOverButton(true);
                            }}
                            onMouseLeave={() => {
                                setOverButton(false);
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                portfolio
                                <FontAwesomeIcon icon={solid("caret-down")} style={{ marginLeft: 5 }} />
                            </div>
                        </Link>
                        {listOpen ? (
                            <div
                                onMouseEnter={() => {
                                    setOverList(true);
                                }}
                                onMouseLeave={() => {
                                    setOverList(false);
                                }}
                            >
                                {dropdownOpts.map((title, i) => (
                                    <Link to={"/" + title}>
                                        <DropdownBtn key={i.toString() + title} sx={{ top: 60 + i * 40 }}>
                                            <p className="dropdown-text">{title}</p>
                                        </DropdownBtn>
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </MenuGridItem>
                    <MenuGridItem item sm={1} md={2}>
                        <Link to="/contact">contact</Link>
                    </MenuGridItem>
                </Box>
                <Grid
                    item
                    xs={3}
                    sm={2}
                    md={3}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <Hamburger rounded toggled={isOpen} toggle={setOpen} />
                        <div className={`${isOpen ? "toggled" : ""} side-bar`}>
                            <div>
                                <HeaderOffset />
                                <Link to="/about">
                                    <SideBarBtn>about</SideBarBtn>
                                </Link>
                                <SideBarBtn
                                    onClick={() => {
                                        setSideBarDropdownOpen(!isSideBarDropdownOpen);
                                    }}
                                    style={{
                                        backgroundColor: isSideBarDropdownOpen
                                            ? "rgb(20, 120, 74, 0.2)"
                                            : "transparent",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                        }}
                                    >
                                        portfolio
                                        <FontAwesomeIcon icon={solid("caret-down")} style={{ marginRight: 20 }} />
                                    </div>
                                </SideBarBtn>
                                {isSideBarDropdownOpen
                                    ? dropdownOpts.map((title, i) => (
                                          <Link key={i.toString() + title} to={"/" + title}>
                                              <SideBarBtn
                                                  sx={{ paddingLeft: 10, backgroundColor: "rgb(20, 120, 74, 0.1)" }}
                                                  key={i.toString() + title}
                                              >
                                                  <p className="dropdown-text">{title}</p>
                                              </SideBarBtn>
                                          </Link>
                                      ))
                                    : null}
                                <Link to="/contact">
                                    <SideBarBtn>contact</SideBarBtn>
                                </Link>
                            </div>
                            <div className="socials" style={{ alignItems: "flex-end", marginBottom: "2rem" }}>
                                <a href="https://www.instagram.com/bythemol/">
                                    <FontAwesomeIcon icon={brands("instagram-square")} className="icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/anna-mola-b90581104/">
                                    <FontAwesomeIcon icon={brands("linkedin")} className="icon" />
                                </a>
                                <a href="https://github.com/annamola/">
                                    <FontAwesomeIcon icon={brands("github-square")} className="icon" />
                                </a>
                            </div>
                        </div>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <div className="socials">
                            <a href="https://www.instagram.com/bythemol/">
                                <FontAwesomeIcon icon={brands("instagram-square")} className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/anna-mola-b90581104/">
                                <FontAwesomeIcon icon={brands("linkedin")} className="icon" />
                            </a>
                            <a href="https://github.com/annamola/">
                                <FontAwesomeIcon icon={brands("github-square")} className="icon" />
                            </a>
                        </div>
                    </Box>
                </Grid>
            </HeaderGrid>
        </div>
    );
};

export default Header;

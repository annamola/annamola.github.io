import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { Grid, IconButton } from "@mui/material";
import en from "../../translations/en.json";
import { Storage } from "aws-amplify";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { PageProps } from "../../types/PageProps.type";

const AboutPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    const [resume, setResume] = useState<string>();

    useEffect(() => {
        fetchResume();
    }, []);

    async function fetchResume() {
        const resume = await Storage.get("assets/pdfs/Anna_Mola_Resume.pdf", {
            level: "public",
        });
        setResume(resume);
    }
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
                    <IconButton onClick={() => window.open(resume)}>
                        <PictureAsPdfIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AboutPage;

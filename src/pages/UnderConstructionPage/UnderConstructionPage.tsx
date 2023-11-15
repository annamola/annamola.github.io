import React from "react";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { Grid, Link, Stack, Typography } from "@mui/material";
import { PageProps } from "../../types/PageProps.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

interface UnderConstructionPageProps extends PageProps {
    link: string;
}

const UnderConstructionPage: React.FunctionComponent<UnderConstructionPageProps> = ({ title, paragraph, link }) => {
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
                    <Stack flexDirection={"column"} gap={2}>
                        <FontAwesomeIcon size="5x" icon={solid("hammer")} />
                        <Typography variant="h2">{title}</Typography>
                        <Link href={link}>
                            <Typography variant="h2">{paragraph}</Typography>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default UnderConstructionPage;

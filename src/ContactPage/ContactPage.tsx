import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import "./ContactPage.scss";
import { Grid, Paper, Button, Container, TextField, Typography, Stack } from "@mui/material";
import useBreakpoints from "../hooks/useBreakpoints";
import SendIcon from "@mui/icons-material/Send";
import { PageProps } from "../types/PageProps.type";

const ContactPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    const { isMobile, isSm } = useBreakpoints();

    return (
        <div>
            <Header />
            <HeaderOffset />
            <div className="container">
                <Stack direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"}>
                    <Container maxWidth="md" sx={{ py: 3 }}>
                        <Stack direction={"column"} spacing={2}>
                            <Typography variant="h2">{title}</Typography>
                            <Typography variant="body2">{paragraph}</Typography>
                        </Stack>
                    </Container>
                    <Container maxWidth="md" sx={{ pb: 3 }}>
                        <Paper elevation={3}>
                            <form action="https://formspree.io/f/xrgodzpw" method="POST" className="contact-form">
                                <Grid container spacing={2} padding={2} sx={{ width: "100%" }}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            variant="outlined"
                                            type="text"
                                            name="first"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            variant="outlined"
                                            type="text"
                                            name="last"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                            type="text"
                                            name="_replyto"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            label="Message"
                                            variant="outlined"
                                            name="message"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth={isMobile || isSm}
                                            variant="contained"
                                            type="submit"
                                            endIcon={<SendIcon />}
                                        >
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Container>
                </Stack>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;

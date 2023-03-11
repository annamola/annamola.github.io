// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import frame from "../assets/images/frame.webp";
import self from "../assets/images/IMG_6972_crop.jpg";
import HeaderOffset from "../Header/HeaderOffset";
import { Grid } from "@mui/material";
import P5Test from "../p5Test/p5Test";
import { listNotes } from "../graphql/queries";
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from "../graphql/mutations";
import { API } from "aws-amplify";
import { Button, Flex, Heading, Text, TextField, View, withAuthenticator } from "@aws-amplify/ui-react";

type HomePageProps = {
    title: string;
    paragraph: string;
};

type result = {
    data: { listNotes: { items: Object } };
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

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = (await API.graphql({ query: listNotes })) as result;
        const notesFromAPI = apiData.data.listNotes.items;
        setNotes(notesFromAPI);
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            name: form.get("name"),
            description: form.get("description"),
        };
        await API.graphql({
            query: createNoteMutation,
            variables: { input: data },
        });
        fetchNotes();
        event.target.reset();
    }

    async function deleteNote({ id }) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        await API.graphql({
            query: deleteNoteMutation,
            variables: { input: { id } },
        });
    }

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
                        <View as="form" margin="3rem 0" onSubmit={createNote}>
                            <Flex direction="row" justifyContent="center">
                                <TextField
                                    name="name"
                                    placeholder="Note Name"
                                    label="Note Name"
                                    labelHidden
                                    variation="quiet"
                                    required
                                />
                                <TextField
                                    name="description"
                                    placeholder="Note Description"
                                    label="Note Description"
                                    labelHidden
                                    variation="quiet"
                                    required
                                />
                                <Button type="submit" variation="primary">
                                    Create Note
                                </Button>
                            </Flex>
                        </View>
                        <Heading level={2}>Current Notes</Heading>
                        <View margin="3rem 0">
                            {notes.map((note) => (
                                <Flex
                                    key={note.id || note.name}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Text as="strong" fontWeight={700}>
                                        {note.name}
                                    </Text>
                                    <Text as="span">{note.description}</Text>
                                    <Button variation="link" onClick={() => deleteNote(note)}>
                                        Delete note
                                    </Button>
                                </Flex>
                            ))}
                        </View>
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

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
import en from "./translations/en.json";
import ZinePage from "./ZinePage/ZinePage";

Amplify.configure(aws_exports);

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage title="Welcome!" paragraph="To this example" />} />
                    <Route path="/about" element={<AboutPage title={en.ABOUT.TITLE} />} />
                    <Route path="/contact" element={<ContactPage title="Contact" paragraph="..." />} />
                    <Route path="/art" element={<ContactPage title="art" paragraph="..." />} />
                    <Route path="/zine" element={<ZinePage title="zine" paragraph="..." />} />
                    <Route path="/web-design" element={<ContactPage title="web" paragraph="..." />} />
                    <Route path="/mobile-app-design" element={<ContactPage title="mobile" paragraph="..." />} />
                    <Route path="/this-website" element={<ContactPage title="mobile" paragraph="..." />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;

//auth and storage and qraphql example here
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import { listNotes } from "./graphql/queries";
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from "./graphql/mutations";
// import { API, Storage } from "aws-amplify";

// const initialFormState = { name: "", description: "" };

// function App() {
//     const [notes, setNotes] = useState([]);
//     const [formData, setFormData] = useState(initialFormState);

//     useEffect(() => {
//         fetchNotes();
//     }, []);

//     async function fetchNotes() {
//         const apiData = await API.graphql({ query: listNotes });
//         const notesFromAPI = apiData.data.listNotes.items;
//         await Promise.all(
//             notesFromAPI.map(async (note) => {
//                 if (note.image) {
//                     const image = await Storage.get(note.image);
//                     note.image = image;
//                 }
//                 return note;
//             })
//         );
//         setNotes(apiData.data.listNotes.items);
//     }

//     async function createNote() {
//         if (!formData.name || !formData.description) return;
//         await API.graphql({ query: createNoteMutation, variables: { input: formData } });
//         if (formData.image) {
//             const image = await Storage.get(formData.image);
//             formData.image = image;
//         }
//         setNotes([...notes, formData]);
//         setFormData(initialFormState);
//     }

//     async function deleteNote({ id }) {
//         const newNotesArray = notes.filter((note) => note.id !== id);
//         setNotes(newNotesArray);
//         await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
//     }

//     async function onChange(e) {
//         if (!e.target.files[0]) return;
//         const file = e.target.files[0];
//         setFormData({ ...formData, image: file.name });
//         await Storage.put(file.name, file);
//         fetchNotes();
//     }

//     return (
//         <div className="App">
//             <h1>My Notes App</h1>
//             <input
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 placeholder="Note name"
//                 value={formData.name}
//             />
//             <input
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 placeholder="Note description"
//                 value={formData.description}
//             />
//             <button onClick={createNote}>Create Note</button>
//             <input type="file" onChange={onChange} />
//             <div style={{ marginBottom: 30 }}>
//                 {notes.map((note) => (
//                     <div key={note.id || note.name}>
//                         <h2>{note.name}</h2>
//                         <p>{note.description}</p>
//                         <button onClick={() => deleteNote(note)}>Delete note</button>
//                         {note.image && <img src={note.image} style={{ width: 400 }} />}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default withAuthenticator(App);

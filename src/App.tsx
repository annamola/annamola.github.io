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

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(aws_exports);

const App = (): JSX.Element => {
    return (
        <div>
            {/* optional login flow */}
            {/* <AmplifyProvider>
                <Authenticator>
                    {({ signOut, user }) => (
                        <Flex
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            alignContent="flex-start"
                            wrap="nowrap"
                            gap="1rem"
                            textAlign="center"
                        >
                            <View width="100%"></View>

                            {user && (
                                <View width="100%">
                                    <Text>Hello {user.username}</Text>
                                    <Button onClick={signOut}>
                                        <Text>Sign Out</Text>
                                    </Button>
                                </View>
                            )}

                            <View width="100%">
                                <Text>
                                    Edit <code>src/App.tsx</code> and save to reload.
                                </Text>
                            </View>
                        </Flex>
                    )}
                </Authenticator>
            </AmplifyProvider> */}
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage title="Welcome!" paragraph="To this example" />} />
                        <Route path="/about" element={<AboutPage title="About Page" paragraph="..." />} />
                        <Route path="/contact" element={<ContactPage title="Contact" paragraph="..." />} />
                        <Route path="/art" element={<ContactPage title="art" paragraph="..." />} />
                        <Route path="/zine" element={<ContactPage title="zine" paragraph="..." />} />
                        <Route path="/web-design" element={<ContactPage title="web" paragraph="..." />} />
                        <Route path="/mobile-app-design" element={<ContactPage title="mobile" paragraph="..." />} />
                        <Route path="/this-website" element={<ContactPage title="mobile" paragraph="..." />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;

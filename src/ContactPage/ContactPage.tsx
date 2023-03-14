import React, { FunctionComponent } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";

import { withAuthenticator, Button, Heading, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

type ContactPageProps = {
    title: string;
    paragraph: string;
};

const ContactPage: FunctionComponent<ContactPageProps> = ({ title, paragraph }) => {
    return (
        <div>
            <Header />
            <div>
                <HeaderOffset />
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {/* <Authenticator hideSignUp={true}>
                    {({ signOut, user }) => (
                        <main>
                            <h1>Hello {user.username}</h1>
                            <h3>love u annie</h3>
                            <button onClick={signOut}>Sign out</button>
                        </main>
                    )}
                </Authenticator> */}
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;

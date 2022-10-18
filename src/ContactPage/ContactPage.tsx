import React, { FunctionComponent } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";

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
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;

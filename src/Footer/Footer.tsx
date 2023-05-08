import React from "react";
import "./Footer.css";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer">
            <img
                height={20}
                src={
                    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNmNzQ2MDRlZTNjMWUwMTU4ZGIwMDliNmE5NDdmNDI4YWZiZDdlOSZjdD1z/SVHO60sBL6aMDIEIN0/giphy.gif"
                }
                alt="Animated GIF of a flame"
            ></img>
            forged in the fire
            <img
                height={20}
                src={
                    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNmNzQ2MDRlZTNjMWUwMTU4ZGIwMDliNmE5NDdmNDI4YWZiZDdlOSZjdD1z/SVHO60sBL6aMDIEIN0/giphy.gif"
                }
                alt="Animated GIF of a flame"
            ></img>
            by anna mola || 2022
        </div>
    );
};

export default Footer;

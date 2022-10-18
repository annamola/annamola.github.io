import "./AnimatedLogo.css";
import React from "react";
import { Link } from "react-router-dom";

const AnimatedLogo: React.FunctionComponent = () => {
    const [typeText, setTypeText] = React.useState("");
    const [typeIndex, setTypeIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const [underscore, setUnderscore] = React.useState(true);

    React.useEffect(() => {
        const name = "  anna mola              ";

        const interval = setInterval(() => {
            setTypeIndex((prevTypeIndex) => prevTypeIndex + direction);

            if (typeIndex === name.length - 1 && direction === 1) {
                setDirection(-1);
            } else if (typeIndex === 1 && direction === -1) setDirection(1);

            if (direction === 1) setTypeText((prevTypeText) => prevTypeText + name[typeIndex]);
            else setTypeText((prevTypeText) => prevTypeText.slice(0, -1));
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, [typeIndex, typeText, direction]);

    React.useEffect(() => {
        const underscoreBlink = setInterval(() => {
            setUnderscore((prevValue) => !prevValue);
        }, 500);

        return () => {
            clearInterval(underscoreBlink);
        };
    }, [underscore]);

    return (
        <div className="logo-container">
            <Link to="/">
                <p className="logo-text">{typeText}</p>
                <p className="logo-text" style={{ visibility: underscore ? "visible" : "hidden" }}>
                    _
                </p>
            </Link>
        </div>
    );
};

export default AnimatedLogo;

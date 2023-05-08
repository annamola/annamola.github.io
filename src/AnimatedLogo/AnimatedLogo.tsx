import "./AnimatedLogo.css";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../theme/theme";

const AnimatedLogo: React.FunctionComponent = () => {
    const [typeText, setTypeText] = React.useState("");
    const [typeIndex, setTypeIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const [underscore, setUnderscore] = React.useState(true);
    const [tally, setTally] = React.useState(0);
    const [color, setColor] = React.useState(true);
    const name = "  anna mola              ";

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTypeIndex((prevTypeIndex) => prevTypeIndex + direction);

            if (typeIndex === name.length - 1 && direction === 1) {
                setDirection(-1);
            } else if (typeIndex === 1 && direction === -1) setDirection(1);
            setTally(tally + 1);
            if (tally % (name.length * 2) === 0) {
                setColor(!color);
            }
            if (direction === 1) setTypeText((prevTypeText) => prevTypeText + name[typeIndex]);
            else setTypeText((prevTypeText) => prevTypeText.slice(0, -1));
        }, 200);
        return () => {
            clearInterval(interval);
        };
    }, [typeIndex, typeText, direction, color, tally]);

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
            <p className="logo-text" style={{ color: color ? "black" : COLORS.main }}>
                {typeText}
            </p>
            <p className="logo-text" style={{ visibility: underscore ? "visible" : "hidden", color: COLORS.main }}>
                _
            </p>
        </div>
    );
};

export default AnimatedLogo;

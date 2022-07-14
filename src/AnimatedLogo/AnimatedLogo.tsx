import "./AnimatedLogo.css";
import React from "react";
import { Link } from "react-router-dom";

const AnimatedLogo: React.FunctionComponent = () => {
    const [typeText, setTypeText] = React.useState("");
    const [typeIndex, setTypeIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const [underscore, setUnderscore] = React.useState(true);

    React.useEffect(() => {
        const name = "anna mola ";

        const interval = setInterval(() => {
            setTypeIndex((prevTypeIndex) => prevTypeIndex + direction);

            if (typeIndex === name.length - 1 && direction === 1) {
                setDirection(-1);
            } else if (typeIndex === 1 && direction === -1) setDirection(1);

            if (direction === 1) setTypeText((prevTypeText) => prevTypeText + name[typeIndex]);
            else setTypeText((prevTypeText) => prevTypeText.slice(0, -1));
        }, 150);

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
            <div className="console-container">
                <Link to="/">
                    <p className="logo-text">{typeText}</p>
                    <p className="logo-text" style={{ visibility: underscore ? "visible" : "hidden" }}>
                        _
                    </p>
                </Link>
            </div>
        </div>
    );
};

/* <script>
            
consoleText(["anna mola"], "text", ["black", "tomato"]);
            function consoleText(words, id, colors) {
                if (colors === undefined) colors = ["#fff"];
                var visible = true;
                var con = document.getElementById("console");
                var letterCount = 1;
                var x = 1;
                var waiting = false;
                var target = document.getElementById(id);
                target.setAttribute("style", "color:" + colors[0]);
                window.setInterval(function () {
                    if (letterCount === 0 && waiting === false) {
                        waiting = true;
                        target.innerHTML = words[0].substring(0, letterCount);
                        window.setTimeout(function () {
                            var usedColor = colors.shift();
                            colors.push(usedColor);
                            var usedWord = words.shift();
                            words.push(usedWord);
                            x = 1;
                            target.setAttribute("style", "color:" + colors[0]);
                            letterCount += x;
                            waiting = false;
                        }, 1000);
                    } else if (
                        letterCount === words[0].length + 1 &&
                        waiting === false
                    ) {
                        waiting = true;
                        window.setTimeout(function () {
                            x = -1;
                            letterCount += x;
                            waiting = false;
                        }, 6000);
                    } else if (waiting === false) {
                        target.innerHTML = words[0].substring(0, letterCount);
                        letterCount += x;
                    }
                }, 130);
            }
        </script> */

export default AnimatedLogo;

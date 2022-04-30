import React from "react"; // importing FunctionComponent
import { Link } from "react-router-dom";
import Typist from "react-typist";

const AnimatedLogo: React.FunctionComponent = () => {
    const [curText, setCurText] = React.useState("anna mola ");

    React.useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
            setCurText("ab");
        }, 1000);

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, []); // has no dependency - this will be called on-component-mount

    return (
        <div className="logo-container">
            <div className="console-container">
                <Link to="/">
                    <p className="logo-text">{curText}</p>
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
                window.setInterval(function () {
                    if (visible === true) {
                        con.className = "console-underscore hidden";
                        visible = false;
                    } else {
                        con.className = "console-underscore";

                        visible = true;
                    }
                }, 600);
            }
        </script> */

export default AnimatedLogo;

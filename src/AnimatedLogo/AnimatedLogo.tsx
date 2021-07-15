import React from "react"; // importing FunctionComponent

const AnimatedLogo: React.FunctionComponent = () => {
    consoleText(["anna mola"], "text", ["black", "tomato"]);

    function consoleText(words: string[], id: string, colors: string[]) {
        if (colors === undefined) colors = ["#fff"];
        let visible = true;
        const con = document.getElementById("console");
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        const target = document.getElementById(id);
        if (target && con) {
            target.setAttribute("style", "color:" + colors[0]);
            window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount);
                    window.setTimeout(function () {
                        let usedColor = colors.shift()!;
                        colors.push(usedColor);
                        let usedWord = words.shift()!;
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
    }

    return (
        <div className="logo-container">
            <div className="console-container">
                <a href="index.html">
                    <span id="text"></span>
                    <div className="console-underscore" id="console">
                        &#95;
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AnimatedLogo;

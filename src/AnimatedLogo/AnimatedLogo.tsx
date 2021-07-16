import React from "react"; // importing FunctionComponent

const AnimatedLogo: React.FunctionComponent = () => {
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

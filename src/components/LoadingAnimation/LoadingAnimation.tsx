// @ts-nocheck
import React from "react";
import "./LoadingAnimation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const LoadingAnimation: React.FunctionComponent = () => {
    return (
        <div className="overlay">
            <div className="gear">
                <FontAwesomeIcon className="rotating" size="5x" icon={solid("gear")} />
            </div>
        </div>
    );
};

export default LoadingAnimation;

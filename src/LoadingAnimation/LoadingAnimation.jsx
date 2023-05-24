// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./LoadingAnimation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const LoadingAnimation = ({ bgImage }) => {
    return (
        <div className="overlay">
            <div className="gear">
                <FontAwesomeIcon className="rotating" size="5x" icon={solid("gear")} />
            </div>
            {bgImage}
        </div>
    );
};

export default LoadingAnimation;

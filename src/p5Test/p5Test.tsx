/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import Dooley from "../assets/images/art/Dooley.png";
interface ComponentProps {
    //Your component props
}
const symmetry = 6;
const angle = 360 / symmetry;
let saveButton, clearButton;
let sizeSlider: any, brushSizeSlider;
let bgImg: p5Types.Image;
const P5Test = (props: ComponentProps) => {
    const preload = (p5: p5Types) => {
        p5.loadImage(Dooley, (img) => {
            bgImg = img;
        });
    };

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        p5.background("#9db5ae");

        // Creating the save button for the file
        saveButton = p5.createButton("save").parent(canvasParentRef);
        saveButton
            .mousePressed((event) => {
                saveFile(p5);
            })
            .parent(canvasParentRef);

        // Creating the clear screen button
        clearButton = p5.createButton("clear").parent(canvasParentRef);
        clearButton
            .mousePressed((event) => {
                clearScreen(p5);
            })
            .parent(canvasParentRef);

        // Setting up the slider for the thickness of the brush
        brushSizeSlider = p5.createButton("Brush Size Slider").parent(canvasParentRef);
        sizeSlider = p5.createSlider(1, 32, 4, 0.1).parent(canvasParentRef);
    };
    // Clear Screen function
    const clearScreen = (p5: p5Types) => {
        p5.background("#9db5ae");
    };

    // Save File Function
    const saveFile = (p5: p5Types) => {
        p5.save("design.jpg");
    };

    const draw = (p5: p5Types) => {
        p5.image(bgImg, 1, 1, 1536 / 5, 2048 / 5);

        p5.translate(p5.width / 2, p5.height / 2);
        if (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) {
            let mx = p5.mouseX - p5.width / 2;
            let my = p5.mouseY - p5.height / 2;
            let pmx = p5.pmouseX - p5.width / 2;
            let pmy = p5.pmouseY - p5.height / 2;
            if (p5.mouseIsPressed) {
                for (let i = 0; i < symmetry; i++) {
                    p5.rotate(angle);
                    let sw = sizeSlider.value();
                    p5.strokeWeight(sw);
                    p5.line(mx, my, pmx, pmy);
                    p5.push();
                    p5.scale(1, -1);
                    p5.line(mx, my, pmx, pmy);
                    p5.pop();
                }
            }
        }
    };

    // return <Sketch setup={setup} draw={draw} preload={preload} />;
};
export default P5Test;

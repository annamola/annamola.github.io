import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

const App = (): JSX.Element => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="App">
                                <HomePage title="Welcome!" paragraph="To this example" />
                            </div>
                        }
                    ></Route>
                    <Route path="/about"></Route>
                    <Route path="/dashboard"></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

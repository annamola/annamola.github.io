import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

const App = (): JSX.Element => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div className="App">
                            <HomePage
                                title="Welcome!"
                                paragraph="To this example"
                            />
                        </div>
                    </Route>
                    <Route path="/about"></Route>
                    <Route path="/dashboard"></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;

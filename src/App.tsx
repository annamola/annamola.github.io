import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";

function App() {
    return (
        <Router>
            <div>
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
            </div>
        </Router>
    );
}

export default App;

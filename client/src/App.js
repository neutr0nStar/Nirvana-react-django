import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global.css";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    AOS.init();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/places">
                    <div>Places</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

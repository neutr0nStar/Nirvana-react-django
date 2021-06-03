import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Places from "./pages/Places/Places";

function App() {
    AOS.init();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/places">
                    <Places />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

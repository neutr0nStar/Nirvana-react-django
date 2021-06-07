import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Places from "./pages/Places/Places";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";

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
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

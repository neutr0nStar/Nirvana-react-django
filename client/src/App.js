import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Places from "./pages/Places/Places";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import TailorPackage from "./pages/TailorPackage/TailorPackage";

/**
 * Entry point to app
 * Routes:
 *  '/' - Home
 *  '/places' - Places
 *  '/about' - About
 *  '/login' - Signin
 *  '/register' - Signup
 *  '/account' - Account
 *  '/tailorPackage/:id' - Tailor a tour package for the id of destination
 */

function App() {
    AOS.init(); // Initialize Animate on Scroll (AOS)
    document.title = "Nirvana";
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/places">
                    <Places />
                </Route>
                <Route path="/tailorPackage/:id">
                    <TailorPackage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

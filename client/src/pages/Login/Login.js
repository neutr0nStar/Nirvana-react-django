import React, { useEffect, useState } from "react";
import LoginCSS from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

/**
 * Login Page
 * On successful login, a token is recieved from backend, and stored in local storage
 */

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErr, setLoginErr] = useState(false);
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    // If already logged in, redirect to accounts
    if (localStorage.nirvanaToken) {
        history.push("/account");
    }

    // Send username and password entered by user to backend
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setLoginErr(false);
        axios
            .post("/api/auth/obtainToken", {
                username,
                password,
            })
            .then((res) => {
                // If username and password are correct, store it in state token
                setToken(res.data.token);
            })
            .catch((err) => {
                setLoginErr(true);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (token) {
            // if state token exists (user is logged in successfully),
            // store token to localstorage
            localStorage.nirvanaToken = token;
            setLoading(false);
            history.push("/");
        }
    }, [token, history]);

    return (
        <div className={LoginCSS.root}>
            <Navbar />
            <div className={LoginCSS.container}>
                <div data-aos="zoom-in" className={LoginCSS.card}>
                    <h1>Login</h1>
                    {loginErr && (
                        <div className={LoginCSS.err}>
                            Unable to login with those credentials !
                        </div>
                    )}
                    <form className={LoginCSS.form}>
                        <label htmlFor="username" className={LoginCSS.label}>
                            Username
                        </label>
                        <input
                            className={LoginCSS.textInput}
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <br />
                        <label htmlFor="password" className={LoginCSS.label}>
                            Password
                        </label>
                        <input
                            className={LoginCSS.textInput}
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={LoginCSS.submitContainer}>
                            {loading ? (
                                <div
                                    className={LoginCSS.submitBtn}
                                    style={{
                                        cursor: "wait",
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.4)",
                                    }}
                                >
                                    Loading...
                                </div>
                            ) : (
                                <input
                                    type="submit"
                                    value="Login"
                                    className={LoginCSS.submitBtn}
                                    onClick={handleSubmit}
                                />
                            )}
                        </div>
                    </form>
                    <div className={LoginCSS.dha}>
                        Don't have an account ? &nbsp;
                        <Link to="/register" className={LoginCSS.a}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import LoginCSS from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErr, setLoginErr] = useState(false);
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    if (localStorage.nirvanaToken) {
        history.push("/account");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setLoginErr(false);
        axios
            .post("http://localhost:8000/api/auth/obtainToken", {
                username,
                password,
            })
            .then((res) => {
                setToken(res.data.token);
            })
            .catch((err) => {
                setLoginErr(true);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (token) {
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
                            Unable To login with those credentials !
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
                        Don't have an accoutn ?
                        <Link to="" className={LoginCSS.a}>
                            &nbsp;Register
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

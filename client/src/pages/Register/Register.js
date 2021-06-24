import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RegisterCSS from "./Register.module.css";

export default function Register() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [token, setToken] = useState();

    const [loading, setLoading] = useState(false);
    const [registerErr, setRegisterErr] = useState("");

    const history = useHistory();
    if (localStorage.nirvanaToken) {
        history.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterErr("");

        if (
            firstName.length *
                lastName.length *
                email.length *
                username.length ===
            0
        ) {
            setRegisterErr("Fields cannot be left empty");
        } else if (password.length < 6) {
            setRegisterErr("Password too short");
        } else if (password !== password2) {
            setRegisterErr("Passwords don't match");
        } else {
            axios
                .post("/api/auth/register", {
                    username,
                    password,
                    email,
                    first_name: firstName,
                    last_name: lastName,
                })
                .then((res) => {
                    setLoading(true);
                    setToken(res.data.token);
                })
                .catch((err) =>
                    setRegisterErr("Unable to register with those credentials")
                );
        }
    };

    useEffect(() => {
        if (token) {
            localStorage.nirvanaToken = token;
            history.push("/");
        }
    }, [token, history]);

    return (
        <div className={RegisterCSS.root}>
            <Navbar />
            <div className={RegisterCSS.container}>
                <div data-aos="zoom-in" className={RegisterCSS.card}>
                    <h1>Register</h1>
                    {registerErr && (
                        <div className={RegisterCSS.err}>{registerErr}</div>
                    )}
                    <form className={RegisterCSS.form}>
                        <div style={{ display: "flex" }}>
                            <div className={RegisterCSS.inpGrp}>
                                <label
                                    htmlFor="first_name"
                                    className={RegisterCSS.label}
                                >
                                    First name:
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className={RegisterCSS.textInput}
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstname(e.target.value)
                                    }
                                />
                            </div>
                            <div className={RegisterCSS.inpGrp}>
                                <label
                                    htmlFor="last_name"
                                    className={RegisterCSS.label}
                                >
                                    Last name:
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className={RegisterCSS.textInput}
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className={RegisterCSS.inpGrp}>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={RegisterCSS.textInput}
                                style={{ width: "95%" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={RegisterCSS.inpGrp}>
                            <label htmlFor="username">Username</label>
                            <br />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className={RegisterCSS.textInput}
                                style={{ width: "95%" }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className={RegisterCSS.inpGrp}>
                                <label
                                    htmlFor="passord"
                                    className={RegisterCSS.label}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={RegisterCSS.textInput}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className={RegisterCSS.inpGrp}>
                                <label
                                    htmlFor="password2"
                                    className={RegisterCSS.label}
                                >
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    className={RegisterCSS.textInput}
                                    value={password2}
                                    onChange={(e) =>
                                        setPassword2(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className={RegisterCSS.submitContainer}>
                            {loading ? (
                                <div
                                    className={RegisterCSS.submitBtn}
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
                                    value="Register"
                                    className={RegisterCSS.submitBtn}
                                    onClick={handleSubmit}
                                />
                            )}
                        </div>
                    </form>
                    <div className={RegisterCSS.ha}>
                        Already have an account ?&nbsp;
                        <Link to="/login" className={RegisterCSS.a}>
                            Login
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

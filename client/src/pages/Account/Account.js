import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import AccountCSS from "./Account.module.css";
import PackageCard from "../../components/PackageCard/PackageCard";

/**
 * Accounts
 * Displays packages for the user
 * And has the logout button
 */

export default function Account() {
    const [user, setUser] = useState();
    const [packages, setPackages] = useState();
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingPackages, setLoadingPackages] = useState(true);
    const history = useHistory();

    // If user is not logged in, redirect to homepage
    if (!localStorage.nirvanaToken) {
        history.push("/");
    }

    // Remove token from localstorage on logout
    const handleLogout = () => {
        localStorage.removeItem("nirvanaToken");
        history.push("/");
    };

    useEffect(() => {
        // Fetch user data
        axios
            .get("/api/auth/getUser", {
                headers: {
                    Authorization: "Token " + localStorage.nirvanaToken,
                },
            })
            .then((res) => setUser(res.data))
            .then(() => setLoadingUser(false))
            .catch((err) => console.log(err));

        // Fetch user packages
        axios
            .get("/api/packages", {
                headers: {
                    Authorization: "Token " + localStorage.nirvanaToken,
                },
            })
            .then((res) => setPackages(res.data))
            .then(() => setLoadingPackages(false))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={AccountCSS.root}>
            <Navbar />
            <div className={AccountCSS.bodyContainer}>
                <div className={AccountCSS.body}>
                    {loadingUser ? (
                        <Loading />
                    ) : (
                        <div>
                            <h1 className={AccountCSS.greeting}>
                                Hello {user.first_name} {user.last_name}
                            </h1>
                            <div className={AccountCSS.packagesHeading}>
                                Your packages:
                            </div>
                            {loadingPackages ? (
                                <Loading />
                            ) : (
                                <div className={AccountCSS.packages}>
                                    {packages.length === 0 && (
                                        <div>
                                            <em>
                                                No packages, go to{" "}
                                                <strong>Places</strong> to
                                                create one !
                                            </em>
                                        </div>
                                    )}
                                    {packages.map((p) => (
                                        <PackageCard
                                            key={p.id}
                                            id={p.id}
                                            title={p.destination}
                                            sd={p.starting_date}
                                            nod={p.no_of_days}
                                            nop={p.no_of_people}
                                            price={p.price}
                                        />
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={handleLogout}
                                className={AccountCSS.logoutBtn}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

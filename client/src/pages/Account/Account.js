import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AccountCSS from "./Account.module.css";
import { useHistory } from "react-router-dom";

export default function Account() {
    const history = useHistory();
    if (!localStorage.nirvanaToken) {
        history.push("/");
    }

    const handleLogout = () => {
        localStorage.removeItem("nirvanaToken");
        history.push("/");
    };

    return (
        <div className={AccountCSS.root}>
            <Navbar />
            <div className={AccountCSS.bodyContainer}>
                <div className={AccountCSS.body}>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

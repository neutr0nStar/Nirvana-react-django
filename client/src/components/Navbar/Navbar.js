import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

/**
 * Navbar component
 * contains link to other pages
 * changes dynamically depending on wheter user is logged in or not
 */

function Navbar(props) {
    return (
        <div>
            <nav className={NavbarCSS.nav}>
                <div data-aos="fade-right" className={NavbarCSS.brandTitle}>
                    Nirvana
                </div>
                <ul data-aos="fade-left">
                    <li className={NavbarCSS.navItem}>
                        <Link className={NavbarCSS.link} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={NavbarCSS.navItem}>
                        <Link className={NavbarCSS.link} to="/places">
                            Places
                        </Link>
                    </li>
                    <li className={NavbarCSS.navItem}>
                        <Link className={NavbarCSS.link} to="/about">
                            About
                        </Link>
                    </li>
                    {localStorage.nirvanaToken ? (
                        <li className={NavbarCSS.navItem}>
                            <Link className={NavbarCSS.link} to="/account">
                                Account
                            </Link>
                        </li>
                    ) : (
                        <li className={NavbarCSS.navItem}>
                            <Link className={NavbarCSS.link} to="/login">
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

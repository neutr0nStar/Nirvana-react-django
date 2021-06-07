import React from "react";
import FooterCss from "./Footer.module.css";

function Footer() {
    return (
        <div className={FooterCss.root}>
            <span>Copyright © 2021 Sneharsh Belsare. All rights reserved</span>
            <span
                className={FooterCss.btt}
                onClick={() => (document.documentElement.scrollTop = 0)}
            >
                Back to Top
            </span>
        </div>
    );
}

export default Footer;

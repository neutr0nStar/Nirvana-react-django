import React from "react";
import PackageCardCSS from "./PackageCard.module.css";

export default function PackageCard({ title, sd, nod, nop }) {
    return (
        <div className={PackageCardCSS.root}>
            <div className={PackageCardCSS.title}>{title}</div>
            <div className={PackageCardCSS.cardBottom}>
                <div className={PackageCardCSS.date}>{sd}</div>
                <div className={PackageCardCSS.nod}>{nod} days</div>
                <div className={PackageCardCSS.nop}>{nop} people</div>
            </div>
        </div>
    );
}

import React from "react";
import axios from "axios";
import PackageCardCSS from "./PackageCard.module.css";

export default function PackageCard({ id, title, sd, nod, nop, price }) {
    const handleDelete = () => {
        let choice = window.confirm(
            "Are you sure you want to cancel the trip ?"
        );
        if (choice) {
            axios
                .get("api/deletePackage/" + id, {
                    headers: {
                        Authorization: "Token " + localStorage.nirvanaToken,
                    },
                })
                .then((res) => {
                    window.location.reload();
                    // console.log(res.status);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className={PackageCardCSS.root}>
            <div className={PackageCardCSS.container}>
                <div className={PackageCardCSS.title}>{title}</div>
                <div className={PackageCardCSS.cardBottom}>
                    <div className={PackageCardCSS.date}>{sd}</div>
                    <div>{nod} days</div>
                    <div>{nop} people</div>
                    <div>Price: {price}</div>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <button
                    className={PackageCardCSS.delBtn}
                    onClick={handleDelete}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

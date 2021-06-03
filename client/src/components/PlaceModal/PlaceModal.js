import React from "react";
import PlaceModalCSS from "./PlaceModal.module.css";
import { Link } from "react-router-dom";

function PlaceModal({ isOpen, handleClose, bgUrl, name, desc }) {
    if (!isOpen) return null;
    return (
        <div className={PlaceModalCSS.modalbg}>
            <div
                style={{
                    backgroundImage: "url(http://localhost:8000" + bgUrl + ")",
                }}
                className={PlaceModalCSS.modalCard}
            >
                <div className={PlaceModalCSS.modalContent}>
                    <div className={PlaceModalCSS.modalContentText}>
                        <h1>{name}</h1>
                        <p>{desc}</p>
                        <br />
                        <br />
                        <br />
                        <Link to="/#">Tailor a tour !</Link>
                    </div>
                </div>
                <span
                    className={PlaceModalCSS.modalClose}
                    onClick={handleClose}
                >
                    &times;
                </span>
            </div>
        </div>
    );
}

export default PlaceModal;

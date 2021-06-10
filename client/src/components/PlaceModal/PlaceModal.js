import React from "react";
import ReactDOM from "react-dom";
import PlaceModalCSS from "./PlaceModal.module.css";
import { Link } from "react-router-dom";

function PlaceModal({ isOpen, handleClose, bgUrl, placeID, name, desc }) {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className={PlaceModalCSS.modalbg}>
            <div
                data-aos="fade-down"
                style={{
                    backgroundImage: "url(" + bgUrl + ")",
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
                        <Link to={"/tailorPackage/" + placeID}>
                            Tailor a tour !
                        </Link>
                    </div>
                </div>
                <span
                    className={PlaceModalCSS.modalClose}
                    onClick={handleClose}
                >
                    &times;
                </span>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default PlaceModal;

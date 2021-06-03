import React from "react";
import PlacesCardCSS from "./PlacesCard.module.css";

function PlacesCard(props) {
    return (
        <div
            data-aos="fade-up"
            style={{
                backgroundImage:
                    "url(http://localhost:8000" + props.picture + ")",
            }}
            className={PlacesCardCSS.root}
        >
            <div className={PlacesCardCSS.titleContainer}>
                <div className={PlacesCardCSS.title} onClick={props.openModal}>
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default PlacesCard;

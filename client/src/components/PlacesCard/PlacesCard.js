import React from "react";
import PlacesCardCSS from "./PlacesCard.module.css";

function PlacesCard(props) {
    return (
        <div
            style={{
                backgroundImage: "url(" + props.picture + ")",
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

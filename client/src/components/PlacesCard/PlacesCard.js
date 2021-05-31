import React from "react";
import PlacesCardCss from "./PlacesCard.module.css";

function PlacesCard(props) {
    console.log(props.rtl);
    return (
        <div
            className={PlacesCardCss.placesCard}
            style={{
                flexDirection: props.rtl ? "row-reverse" : "row",
                textAlign: props.rtl ? "right" : "left",
            }}
        >
            <img
                data-aos={props.rtl ? "fade-left" : "fade-right"}
                src={props.img}
                alt="img"
            />
            <div
                data-aos={props.rtl ? "fade-left" : "fade-right"}
                className={PlacesCardCss.placesCardContent}
            >
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <br />
                <a href="/#">Read more </a>
            </div>
        </div>
    );
}

export default PlacesCard;

import React from "react";
import LoadingCSS from "./Loading.module.css";

function Loading() {
    return (
        <div className={LoadingCSS.root}>
            <div className={LoadingCSS.loader}></div>
        </div>
    );
}

export default Loading;

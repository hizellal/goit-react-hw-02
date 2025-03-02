import css from "./Options.module.css";
import React, { useState } from "react";

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
    return (
        <div className={ css.btn }>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>

            { totalFeedback > 0 && <button onClick={ resetFeedback }>Reset</button> }
        </div>
    );
}
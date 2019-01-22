import React from 'react';

import './hotColdBox.css';

export default function HotColdComponent(props) {
    if (props.temp === "hot") {
        return <div className="hot-box">
            {props.temp}
            </div>
    } else if (props.temp === "cold") {
        return <div className="cold-box">
        {props.temp}
        </div>
    }
}
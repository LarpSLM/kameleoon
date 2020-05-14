import React from "react";
import style from "./style.module.css";

export default function Item(props) {
    return (
        <div className={style.item}>
            <h1>{props.name}</h1>
            <p>Sites:</p>
            <span>{props.sites}</span>
            <p>Type:</p>
            <span>{props.type}</span>
            <p>Status:</p>
            <span className={props.status === 'blocked' ? style.badStatus : ''}>{props.status}</span>

            <div className={style.unlock}>
                <button onClick={props.onClick}>Unlock</button>
            </div>
        </div>
    )
}
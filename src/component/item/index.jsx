import React from "react";
import style from "./style.module.css";

export default function Item(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <div>
                    <p>{props.name}</p>
                </div>
                <div>
                    <p>{props.sites} site</p>
                </div>
                <div>
                    <span>{props.type}</span>
                </div>
                <div className={style.status}>
                    {props.status === 'enable' && <p className={style.toggleOn}>on</p>}
                    {props.status === 'disable' && <p className={style.toggleOff}>off</p>}
                    {props.status === 'blocked' && <i className="fas fa-lock"></i>}
                </div>
            </div>
        </div>
    )
}
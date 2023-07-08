import styles from './Avatar.module.css';
import React from "react"

export default function Avatar(props) {
    return (
        <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}/>
    )
}
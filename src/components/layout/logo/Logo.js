import React from "react";
import { Link } from "gatsby"
import styles from "./logo.module.css"
import logoImg from "./logo.svg"

export default function Logo( ) {

    return(
        <div className={styles.logoContainer}>
            <Link to="/">
            <img 
                className={styles.logoImg}
                src={logoImg} 
                alt="Andrew Braun logo"/>
            </Link>
        </div>
    )
}

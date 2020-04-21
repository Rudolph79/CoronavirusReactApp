import React from 'react'
// import { StylesProvider } from '@material-ui/core'
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.image}>
            <img src="https://www.un.org/sites/un2.un.org/files/covid19_response_icon.svg" 
            width="250" height="250" alt="logo" />
        </div>
    )
}

export default Logo;

import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from './navbar.module.css'
import LogoImage from "../../assets/logo.png"

export default function Navbar(){
    return(
        <div>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv} ><img src={LogoImage} alt="logo" width={67}/></div>
                <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
            </nav>
        </div>
    )
}
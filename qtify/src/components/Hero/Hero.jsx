import React from "react";
import styles from "./Hero.module.css"
import HeroImage from '../../assets/vibrating-headphone 1.png'


const Hero=()=>{
    return(
        <div>
            <section className={styles.Hero}>
                <div className={styles.Herotitle}>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>

                <img className={styles.HeroImage} src={HeroImage} alt='headphone'/>
            </section>
        </div>
    )
}

export default Hero;
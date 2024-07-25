import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Prabhudatta Mohapatra,</h1>
        <p className={styles.description}>
          a Software Engineer with 2 years of enterprise experience
        </p>
        <div className="d-flex">
          <a href="mailto:prabhudatta.prof@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/Prabhudatta_Mohapatra_CV.pdf" download="Prabhudatta_Mohapatra_CV.pdf" className={styles.downloadBtn}>
            Resume<i className="bi bi-download mx-2"></i>
          </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/about2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

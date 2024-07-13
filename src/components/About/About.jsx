import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/about2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Full Stack Developer</h3> */}
              <p>
                I am a product-driven software engineer having experience of developing Software products(Applications and Services) on 
                both client-side and server-side. I have developed fast single-page web applications
                and back-end services and APIs including data extraction and presntation to API layer. I have also had the chance to dive 
                into Deep Learning and Cloud Computing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

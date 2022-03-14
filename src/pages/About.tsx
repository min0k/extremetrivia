import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.textContent}>
        <h1 className={styles.h1}>
          Made By{" "}
          <span>
            {" "}
            <a
              className={styles.link}
              href="https://www.minokim.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mino Kim
            </a>
          </span>
        </h1>
        <h1 className={styles.madeWith}>
          Made with: React, Typescript, React Router, and CSS Modules,{" "}
        </h1>
        <h2>
          <a
            className={styles.link}
            href="https://github.com/min0k/trivia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </h2>
      </div>
    </div>
  );
}

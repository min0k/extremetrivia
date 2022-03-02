import { NavigateFunction, useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";
import skull from "../skull.png";

import React from "react";

export default function StartPage() {
  const navigate = useNavigate();

  const [categoryChosen, setCategoryChosen] = React.useState(false);

  function handleCategoryClick() {
    setCategoryChosen(true);
  }

  const categoryList = [
    "Advanced Calculus",
    "Anime",
    "Classical Music",
    "Indie Movies",
    "Natural Disasters",
    "Birthdays",
    "Controversial",
    "Physics",
    "Greek Mythology",
    "Australian Politics",
  ];

  const categories = categoryList.map((e, idx) => (
    <button
      className={styles.button}
      style={{
        backgroundColor: categoryChosen === true ? "grey" : undefined,
        boxShadow: categoryChosen === true ? "none" : undefined,
        color: categoryChosen === true ? "lightgrey" : undefined,
      }}
      onClick={handleCategoryClick}
      key={idx}
    >
      {e}
    </button>
  ));

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a href={"/"} className={styles.navLogo}>
          Extreme Trivia
        </a>
        <a href={"/"} className={styles.about}>
          About
        </a>
      </nav>
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.h1}>
            Welcome to <span>Extreme</span> Trivia. Think you're a know-it-all?
            Prove it.
          </h1>
          <p>
            You have 15 seconds to answer each question. Answer 50 questions to
            win.
          </p>
          {<div className={styles.choices}>{categories}</div>}
          {StartTriviaButton(navigate, categoryChosen)}
        </div>
        <div className={styles.imgContainer}>
          <img src={skull} alt="skull" className={styles.skullImg}></img>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <a className={styles.footer} href={"/"}>
          Made by Mino Kim
        </a>
      </div>
    </div>
  );
}

function StartTriviaButton(
  navigate: NavigateFunction,
  categoryChosen: boolean
): React.ReactNode {
  return (
    <div style={{ display: categoryChosen === true ? undefined : "none" }}>
      <h2 className={styles.extremeText}>
        You don't get to choose the category. This is EXTREME trivia.
      </h2>
      <button className={styles.button} onClick={() => navigate("/trivia")}>
        START GAME
      </button>
    </div>
  );
}

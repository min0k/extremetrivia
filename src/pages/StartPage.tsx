import { NavigateFunction, useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";
import skull from "../skull.png";

import React from "react";

export default function StartPage() {
  const navigate = useNavigate();

  const [categoryChosen, setCategoryChosen] = React.useState(false);

  const categoryList = [
    "Advanced Calculus",
    "Classical Music",
    "Indie Movies",
    "Natural Disasters",
    "Controversial",
    "Physics",
    "Greek Mythology",
    "Australian Politics",
    "Slang",
    "Architecture",
    "Poetry",
  ];

  const categories = categoryList.map((e, idx) => (
    <button
      className={styles.button}
      style={{
        backgroundColor: categoryChosen === true ? "grey" : undefined,
        boxShadow: categoryChosen === true ? "none" : undefined,
        color: categoryChosen === true ? "lightgrey" : undefined,
      }}
      onClick={() => setCategoryChosen(true)}
      key={idx}
    >
      {e}
    </button>
  ));

  return (
    <div className={styles.page}>
      <div className={styles.textContent}>
        <h1 className={styles.h1}>
          Welcome to <span>Extreme</span> Trivia. Think you're a know-it-all?
          Prove it.
        </h1>
        <p>
          You have 15 seconds to answer each question. Answer 50 questions to
          win.
        </p>
        <h3>Choose a category:</h3>
        {<div className={styles.choices}>{categories}</div>}
        {StartTriviaButton(navigate, categoryChosen)}
      </div>
      <div className={styles.imgContainer}>
        <img src={skull} alt="skull" className={styles.skullImg}></img>
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
        This is EXTREME trivia. You don't get choose the category.
      </h2>
      <button className={styles.button} onClick={() => navigate("/trivia")}>
        START GAME
      </button>
    </div>
  );
}

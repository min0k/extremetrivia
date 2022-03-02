import useGameLogic from "../utility/useGameLogic";
import QuestionCard from "../components/QuestionCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "../components/Countdown";

import styles from "./GamePage.module.css";

export default function GamePage() {
  const { triviaQuestions, currentQuestionNumber, handleClick, gameOver } =
    useGameLogic();

  const navigate = useNavigate();

  useEffect(() => {
    if (gameOver) {
      navigate("/gameover", {
        state: currentQuestionNumber ? currentQuestionNumber - 1 : 0,
      });
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver]);

  const TriviaCard = triviaQuestions?.map((e, idx) => {
    return (
      <QuestionCard
        question={e.question}
        all_choices={e.all_choices}
        key={idx}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className={styles.page}>
      {triviaQuestions && TriviaCard ? (
        TriviaCard[currentQuestionNumber]
      ) : (
        <h1>loading...</h1>
      )}
      <Countdown />
    </div>
  );
}

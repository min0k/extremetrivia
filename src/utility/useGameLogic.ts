import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";
import { triviaObject } from "./Interface";

export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<triviaObject[]>();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  let timer = 15;

  useEffect(() => {
    async function createTriviaQuestions() {
      const data = await getQuestions();
      const questions = prepareQuestions(data);
      setTriviaQuestions(questions);
    }

    createTriviaQuestions();
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer === 0) {
        setGameOver(true);
      } else {
        timer--;
      }
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionNumber]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
    updateTriviaQuestions(event);
  }

  const updateTriviaQuestions = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const answer = event.currentTarget.value;
    const correct =
      triviaQuestions![currentQuestionNumber].correct_answer === answer;
    if (!correct) {
      setGameOver(true);
    }

    if (currentQuestionNumber === 4) {
      setGameOver(true)
    }

  };

  return {
    triviaQuestions,
    currentQuestionNumber,
    handleClick,
    gameOver,
  };
}

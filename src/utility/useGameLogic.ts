import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";
import { triviaObject } from "./Interface";

export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<triviaObject[]>();
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function createTriviaQuestions() {
      const data = await getQuestions();
      const questions = prepareQuestions(data);
      setTriviaQuestions(questions);
    }

    createTriviaQuestions();

    let time = 5;
    const countdown = setInterval(() => {
      if (time === 0) {
        setGameOver(true);
      } else {
        time--;
        console.log(`time left is currently ${time}`);
      }
    }, 1000);

    return () => {
      console.log("gamelogic cleanuped");
      clearInterval(countdown);
    };
  }, []);

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
  };

  return {
    triviaQuestions,
    currentQuestionNumber,
    handleClick,
    gameOver,
  };
}

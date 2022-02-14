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
  }, []);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
    updateTriviaQuestions(event);
  }

  const updateTriviaQuestions = (event: React.MouseEvent<HTMLButtonElement>) => {

    const answer = event.currentTarget.value;

    const correct = triviaQuestions![currentQuestionNumber].correct_answer === answer

    if (correct) {
      setGameOver(true);
    }
    
    // const newTriviaQuestions  = triviaQuestions?.map((obj) => {
    //   if (obj.question === question) {
    //     return {
    //       ...obj,
    //       answered: !obj.answered
    //     };
    //   } else {
    //     return {
    //       ...obj
    //     }
    //   }
    // })
    // setTriviaQuestions(newTriviaQuestions)
  }

  return {
    triviaQuestions,
    currentQuestionNumber,
    handleClick,
    gameOver
  };
}

import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";
import { triviaObject } from "./Interface";

export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<triviaObject[] | null>(
    null
  );
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

  useEffect(() => {
    async function createTriviaQuestions() {
      const data = await getQuestions();
      const questions = prepareQuestions(data);
      setTriviaQuestions(questions);
    }

    createTriviaQuestions();
  }, []);

  function handleClick(e?: React.MouseEvent) {
    setCurrentQuestionNumber((prevNumber) => prevNumber + 1);
    console.log(`this is question # ${currentQuestionNumber + 1}`);
    if (e) {
      updateTriviaQuestions(e);
    }

  }

  // handle triviaQuestion state update here!
  // figure out which question has been answered, if correct keep going forward,
  // if wrong, end the game. Count all answered questions and that's how many they got right
  // (if answered incorrectly, game would auto end so no need to have "correct answer" state,etc)

  function updateTriviaQuestions(event: React.MouseEvent) {
    console.log(event);
  }

  return {
    triviaQuestions,
    currentQuestionNumber,
    handleClick,
  };
}

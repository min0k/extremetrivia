import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";
import { triviaObject } from "./Interface";

export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<triviaObject[]>();
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
    // updateTriviaQuestions();
  }

  // const updateTriviaQuestions = (question: string) => {
  //   const newTriviaQuestions : triviaObject = triviaQuestions?.map((obj) => {
  //     if (obj.question === question) {
  //       return {
  //         ...obj,
  //         answered: !obj.answered
  //       };
  //     } else {
  //       return {
  //         ...obj
  //       }
  //     }
  //   })
  //   setTriviaQuestions(undefined)
  // }

  return {
    triviaQuestions,
    currentQuestionNumber,
    handleClick,
  };
}

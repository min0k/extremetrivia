import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";

export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<Array<{}>>();

  useEffect(() => {
    async function createTriviaQuestions() {
      const data = await getQuestions();
      const questions = await prepareQuestions(data)
      setTriviaQuestions(questions);
    }
    
    createTriviaQuestions();

  }, []);



  return {
    triviaQuestions,
  };
}

import { useState, useEffect } from "react";
import getQuestions from "../api/getQuestions";
import prepareQuestions from "./prepareQuestions";
import { triviaObject } from "./Interface";


export default function useGameLogic() {
  const [triviaQuestions, setTriviaQuestions] = useState<triviaObject[] | null>(null);

  useEffect(() => {
    
    async function createTriviaQuestions() {
      const data = await getQuestions();
      const questions = prepareQuestions(data);
      setTriviaQuestions(questions);
    }

    createTriviaQuestions();
  }, []);

  return {
    triviaQuestions,
  };
}

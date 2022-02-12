import useGameLogic from "../utility/useGameLogic";
import QuestionCard from "../components/QuestionCard";
import React from "react";

export default function GamePage() {
  const { triviaQuestions } = useGameLogic();
  const [currentQuestionNumber, setCurrentQuestionNumber] = React.useState(0);

  function handleClick() {
    setCurrentQuestionNumber(prevNumber => prevNumber + 1);
  }

  const TriviaCard = triviaQuestions?.map((e, idx) => {
      // Use index instead of key, keys should be consistent because
      // React uses keys to determine re-render effects
    return (
        <QuestionCard
        question={e.question}
          all_choices={e.all_choices}
          category={e.category}
          correct_answer={e.correct_answer}
          answered={e.answered}
          key={idx}
          handleClick={handleClick}
        />
      );
    });
    

  return <div>
    {triviaQuestions && TriviaCard ? TriviaCard[currentQuestionNumber] : <h1>loading...</h1>}
  </div>;
}

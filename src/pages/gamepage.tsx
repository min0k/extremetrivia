import useGameLogic from "../utility/useGameLogic";
import QuestionCard from "../components/QuestionCard";
import React from "react";

export default function GamePage() {
  const { triviaQuestions, currentQuestionNumber, handleClick } =
    useGameLogic();

  const TriviaCard = triviaQuestions?.map((e, idx) => {
    // Use index instead of key, keys should be consistent because
    // React uses keys to determine re-render effects
    return (
      <QuestionCard
        question={e.question}
        all_choices={e.all_choices}
        key={idx}
        handleClick={(event) => handleClick(event)}
      />
    );
  });

  console.log(triviaQuestions);
  
  return (
    <div>
      {triviaQuestions && TriviaCard ? (
        TriviaCard[currentQuestionNumber]
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

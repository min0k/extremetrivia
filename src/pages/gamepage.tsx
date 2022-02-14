import useGameLogic from "../utility/useGameLogic";
import QuestionCard from "../components/QuestionCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  const { triviaQuestions, currentQuestionNumber, handleClick, gameOver } =
    useGameLogic();

    const navigate = useNavigate();

  useEffect(() => {
    if (gameOver) {
      navigate("/gameover", { state: currentQuestionNumber - 1 })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOver])

  console.log(gameOver);
  

  const TriviaCard = triviaQuestions?.map((e, idx) => {
    // Use index instead of key, keys should be consistent because
    // React uses keys to determine re-render effects
    return (
      <QuestionCard
        question={e.question}
        all_choices={e.all_choices}
        key={idx}
        handleClick={handleClick}
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

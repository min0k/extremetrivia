import useGameLogic from "../utility/useGameLogic";
import QuestionCard from "../components/QuestionCard";
import { nanoid } from "nanoid";

export default function GamePage() {
  const { triviaQuestions } = useGameLogic();

  console.log(triviaQuestions);

  const TriviaCard = triviaQuestions?.map((e) => {
      const key = nanoid();
      return (
        <QuestionCard
          question={e.question}
          all_choices={e.all_choices}
          category={e.category}
          correct_answer={e.correct_answer}
          answered={e.answered}
          key={key}
        />
      );
    });

  return <div>
    {triviaQuestions && TriviaCard}
  </div>;
}

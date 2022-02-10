import useGameLogic from "../utility/useGameLogic";
import { nanoid } from "nanoid";

export default function GamePage() {
  const { triviaQuestions } = useGameLogic();




  // STOP CODING, think carefully about how you want to architect from now
  const Questions =  triviaQuestions?.map(e => {
      const key = nanoid();
        return <h1 key={key}>{e.question}</h1>
    })

    console.log(Questions);

  return (
    <div>
      <h1>game page</h1>
    </div>
  );
}

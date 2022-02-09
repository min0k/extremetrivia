

import useGameLogic from "../utility/useGameLogic";

export default function GamePage() {

    const {triviaQuestions} = useGameLogic();
    
    console.log(triviaQuestions);



    return (
        <div>
            <h1>game page</h1>
        </div>
    )
}
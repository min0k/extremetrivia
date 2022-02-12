import React from "react";
import { triviaObject } from "../utility/Interface";



 const QuestionCard : React.FC<triviaObject> = ({question, all_choices, handleClick}) => {
    return (
        <div>
            <h1>{question}</h1>
            <div>
            {all_choices.map((e, index) => <button onClick={handleClick} key={index}>{e}</button>)}
            </div>
        </div>
    )
}

export default QuestionCard
import React from "react";
import { triviaObject } from "../utility/Interface";


interface Props {
    question: string,
    all_choices: string[];
    handleClick? : (event: React.MouseEvent<Element>) => void;
}

 const QuestionCard : React.FC<Props> = ({question, all_choices, handleClick}) => {
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
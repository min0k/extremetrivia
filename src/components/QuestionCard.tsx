import React from "react";
import { triviaObject } from "../utility/Interface";



 const QuestionCard : React.FC<triviaObject> = ({question, all_choices}) => {
    return (
        <div>
            <h1>{question}</h1>
            <div>
                <button>{all_choices[0]}</button>
                <button>{all_choices[1]}</button>
                <button>{all_choices[2]}</button>
                <button>{all_choices[3]}</button>
            </div>
        </div>
    )
}

export default QuestionCard
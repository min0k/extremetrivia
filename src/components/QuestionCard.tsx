import React from "react";


interface Props {
    question: string,
    all_choices: string[];
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

 const QuestionCard : React.FC<Props> = ({question, all_choices, handleClick}) => {
    return (
        <div>
            <h1>{question}</h1>
            <div>
            {all_choices.map((e, index) => <button id={index.toString()} value={e} onClick={handleClick} key={index}>{e}</button>)}
            </div>
        </div>
    )
}

export default QuestionCard
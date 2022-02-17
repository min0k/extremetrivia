import React from "react";
import styles from "./QuestionCard.module.css";

import "./QuestionCard.module.css";

interface Props {
  question: string;
  all_choices: string[];
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionCard: React.FC<Props> = ({
  question,
  all_choices,
  handleClick,
}) => {
  return (
    <div>
      <h1 className={styles.h1}>{question}</h1>
      <div className={styles.choices}>
        {all_choices.map((e, index) => (
          <button
            id={index.toString()}
            value={e}
            onClick={handleClick}
            key={index}
            className={styles.choiceButtons}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

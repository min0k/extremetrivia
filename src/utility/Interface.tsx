export interface OpenTDBResponse {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string, string, string];
  length: number;
  question: string;
  type: string;
}

export interface triviaObject {
    category: string;
    correct_answer: string;
    all_choices: string[];
    question: string;
    answered: boolean;
}

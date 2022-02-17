import { OpenTDBResponse } from "./Interface";
import decoder from "./decoder";

export default function prepareQuestions(obj: OpenTDBResponse[]) {

  // decode html entities
  const preparedQuestions = obj.map((e) => {
    const decodedQuestion = decoder(e.question);
    const decodedCorrectAnswer = decoder(e.correct_answer);
    const decodedIncorrectAnswers = e.incorrect_answers.map((e) => {
      return decoder(e);
    });

    // MINO -- You might need another custom decoder just for the answer choices.

    // shuffle all 4 answers
    const allChoices = decodedIncorrectAnswers;
    allChoices.push(decodedCorrectAnswer)

    const shuffled = allChoices
    .map((value) => ({ value, sort: Math.random() }))
    .sort(() =>  Math.random() -  Math.random())
    .map(({ value }) => value);

    return {
      category: e.category,
      correct_answer: decodedCorrectAnswer,
      all_choices: shuffled,
      question: decodedQuestion,
      answered: false,
    };
  });
  return preparedQuestions;
}

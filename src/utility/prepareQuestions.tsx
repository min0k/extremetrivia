import {OpenTDBResponse} from "./Interface";

// decode, randomize, and only accept whats needed.


export default function prepareQuestions(
  obj: OpenTDBResponse[]
) {
  const preparedQuestions = obj.map((e) => {
    return {
      category: e.category,
      correct_answer: e.correct_answer,
      difficulty: e.difficulty,
      incorrect_answers: [e.incorrect_answers[0], e.incorrect_answers[1], e.incorrect_answers[2]],
      length: e.length,
      question: e.question,
      type: e.type,
    };
  });
  return preparedQuestions
}

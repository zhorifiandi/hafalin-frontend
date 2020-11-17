import axios from "axios";

export default async function evaluateAnswers(answerSet, solutions) {
  const result = await axios.post("/api/evaluations", {
    answer_set: answerSet,
    solutions: solutions,
  });

  const evaluations = result.data;
  return evaluations;
}

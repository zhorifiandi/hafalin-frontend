import axios from "axios";

export default async function evaluateAnswers(answerSet, solutionSet) {
  const result = await axios.post("/api/evaluations", {
    answer_set: answerSet,
    solution_set: solutionSet,
  });

  const evaluations = result.data;
  return evaluations;
}

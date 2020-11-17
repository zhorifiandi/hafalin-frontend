import axios from "axios";

export default async function evaluateShortAnswers(answerSet, solutionSet) {
  const result = await axios.post("/api/evaluations/short_answer", {
    answer_set: answerSet,
    solution_set: solutionSet,
  });

  const evaluations = result.data;
  return evaluations;
}

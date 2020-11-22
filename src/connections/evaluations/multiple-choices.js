import axios from "../core/axios";

export default async function evaluateMultipleChoices(answerSet, solutionSet) {
  const result = await axios.post("/api/evaluations/multiple_choice", {
    answer_set: answerSet,
    solution_set: solutionSet,
  });

  const evaluations = result.data;
  return evaluations;
}

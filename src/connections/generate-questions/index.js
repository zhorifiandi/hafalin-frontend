import axios from "axios";

export default async function generateQuestions(essay) {
  const result = await axios.post("/api/questions/short_answer", {
    document: essay,
    type: "short_answer",
    max_questions: 5,
  });

  const multipleChoices = result.data;

  return multipleChoices;
}

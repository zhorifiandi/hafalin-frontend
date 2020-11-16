import axios from "axios";

export default async function generateQuestions(essay) {
  const result = await axios.post("/api/generate-questions", {
    document: essay,
    type: "all",
    max_questions: 10,
  });

  const multipleChoices = result.data;

  return multipleChoices;
}

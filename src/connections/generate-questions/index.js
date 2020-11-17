import axios from "axios";

export default async function generateQuestions(essay, questionType) {
  const result = await axios.post("/api/questions", {
    document: essay,
    type: questionType,
    max_questions: 9,
  });

  const questions = result.data;
  return questions;
}

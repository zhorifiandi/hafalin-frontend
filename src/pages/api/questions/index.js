import axios from "axios";

const MAX_QUESTIONS = 7;

export default async function handler(req, res) {
  try {
    const result = await axios.post(
      "https://hafalin.herokuapp.com/generate_question",
      req.body
    );
    const jsonData = result.data;
    if (jsonData?.data.length <= 1) {
      throw new Error('No questions generated')
    }

    const questions = jsonData?.data;
    const randomQuestions = questions.sort(() => .5 - Math.random()).slice(0,Math.min(MAX_QUESTIONS, questions.length))

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(randomQuestions));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: err.message
    }));
  }
}

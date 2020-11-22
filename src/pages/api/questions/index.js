import _ from "lodash";
import axios from "../../../connections/core/axios";

import Bottleneck from "bottleneck";
const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333,
});

const MAX_QUESTIONS = 10;
const SENTENCE_CHUNK = 8;

export default async function handler(req, res) {
  try {
    const sentences = req.body.document.split(".");
    const sentenceChunks = _.chunk(sentences, SENTENCE_CHUNK);
    const paragraphs = sentenceChunks.map((sc) => {
      return sc.join(". ");
    });

    const questionPromises = paragraphs.map((paragraph) =>
      axios
        .post("https://hafalin.herokuapp.com/generate_question", {
          document: paragraph,
          // type: "all",
          type: req.body.type,
          max_questions: req.body.max_questions,
        })
        .catch((err) => {
          console.log(err);
          return {};
        })
    );

    console.log("questionPromises", questionPromises);
    const rawResponses = await limiter.schedule(() =>
      Promise.all(questionPromises)
    );
    const rawQuestions = rawResponses.flatMap((rawResponse) => {
      // const question =
      //   req.body.type === "multiple_choice"
      //     ? rawResponse?.data?.data?.multiple_choice
      //     : rawResponse?.data?.data?.short_answer;
      // return question;
      return rawResponse?.data?.data;
    });
    console.log("rawQuestions", rawQuestions);

    const questions = rawQuestions.filter((question) => _.isObject(question));
    console.log("questions", questions);

    if (questions.length <= 1) {
      throw new Error("No questions generated");
    }

    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(MAX_QUESTIONS, questions.length));
    console.log("randomQuestions", randomQuestions);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(randomQuestions));
  } catch (err) {
    console.log("err", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: err.message,
      })
    );
  }
}

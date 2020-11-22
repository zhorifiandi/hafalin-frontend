import axios from "../core/axios";

export default async function generateQuestions(essay, questionType) {
  const result = await axios.post("/api/questions", {
    document: essay.trim().replace(/(\r\n|\n|\r)/gm, ""),
    type: questionType,
    max_questions: 9,
  });

  const questions = result.data;
  return questions;
}

// import _ from "lodash";
// import axios from "axios";
// import Bottleneck from "bottleneck";

// const limiter = new Bottleneck({
//   maxConcurrent: 1,
//   minTime: 333
// });

// const MAX_QUESTIONS = 10;

// export default async function generateQuestions(essay, questionType) {
//   try {
//     const cleanedEssay = essay.trim().replace(/(\r\n|\n|\r)/gm, "");
//     console.log("cleanedEssay", cleanedEssay);
//     const sentences = cleanedEssay.split(".");
//     const questionPromises = sentences.map(sentence => axios.post("/api/questions", {
//       document: sentence,
//       type: questionType,
//       max_questions: 9,
//     }).catch(err => {
//       console.log(err);
//       return [];
//     }))

//     const rawResponses = await limiter.schedule(() => Promise.all(questionPromises))
//     console.log("rawResponses", rawResponses)

//     const questions = rawResponses.flatMap(rawResponse => rawResponse.data);
//     const cleanedQuestions = questions.filter(question => _.isObject(question));

//     const randomQuestions = cleanedQuestions
//       .sort(() => 0.5 - Math.random())
//       .slice(0, Math.min(MAX_QUESTIONS, cleanedQuestions.length));

//     console.log("randomQuestions", randomQuestions)
//     return randomQuestions;
//   } catch (err) {
//     console.log(err)
//   }
// }

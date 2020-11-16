import axios from "axios";

export default async function handler(req, res) {
  // const result = await axios.post("https://hafalin.herokuapp.com/generate_question", req.body)
  // console.log(result);
  // const jsonData = result.data;

  // console.log("jsonData", jsonData)

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify(jsonData?.data?.multiple_choice))
  res.end(
    JSON.stringify([
      {
        answer: "a",
        choices: {
          a: "Selat Sunda dan Samudera Pasifik",
          b: "Selat Sunda dan Samudera Indonesia",
          c: "Selat Sunda dan Samudera Hindia",
          d: "Selat Sunda dan Samudera Arktik",
        },
        question:
          "Pulau Sumatera sebelah selatan dan barat berbatasan dengan ....",
      },
      {
        answer: "a",
        choices: {
          a: "Selat Sunda dan Samudera Pasifik",
          b: "Selat Sunda dan Samudera Indonesia",
          c: "Selat Sunda dan Samudera Hindia",
          d: "Selat Sunda dan Samudera Arktik",
        },
        question:
          "Pulau Sumatera sebelah selatan dan barat berbatasan dengan ....",
      },
      {
        answer: "a",
        choices: {
          a: "Selat Sunda dan Samudera Pasifik",
          b: "Selat Sunda dan Samudera Indonesia",
          c: "Selat Sunda dan Samudera Hindia",
          d: "Selat Sunda dan Samudera Arktik",
        },
        question:
          "Pulau Sumatera sebelah selatan dan barat berbatasan dengan ....",
      },
    ])
  );
}

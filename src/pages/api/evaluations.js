import stringSimilarity from "string-similarity";

const ACCURACY_THRESHOLD = 0.8;

export default async function handler(req, res) {
  try {
    const { answer_set, solution_set } = req.body;
    const evaluations = solution_set.map((possibleSolutions, index) => {
      const result = stringSimilarity.findBestMatch(
        (answer_set[index] || "").toLowerCase(),
        possibleSolutions
      );
      const { bestMatch } = result;
      return bestMatch.rating >= ACCURACY_THRESHOLD;
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(evaluations));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(err));
  }
}

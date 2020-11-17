import stringSimilarity from "string-similarity";

export default async function handler(req, res) {
  const keyword = "kitten";
  const comparisons = ["smitten", "mitten", "kitty", "fitting", "written"];

  const result = stringSimilarity.findBestMatch(keyword, comparisons);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result));
}

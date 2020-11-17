export default function handler(req, res) {
  try {
    const { answer_set, solution_set } = req.body;
    const evaluations = solution_set.map((solution, index) => {
      return solution === answer_set[index];
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

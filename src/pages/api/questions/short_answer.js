import axios from "axios";

export default async function handler(req, res) {
  try {
    const result = await axios.post(
      "https://hafalin.herokuapp.com/generate_question",
      req.body
    );
    const jsonData = result.data;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(jsonData?.data));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(err));
  }
}

import { useState } from "react";
import { Box } from "@aksara-ui/core";
import HomeAndInputFragment from "../components/fragment/home-and-input";
import LoadingFragment from "../components/fragment/loading";
import QuizFragment from "../components/fragment/quiz";
import generateQuestions from "../connections/generate-questions";

const Home = () => {
  const [isSubmiting, setSubmiting] = useState(false);
  const [isGenerated, setGenerated] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleEssaySubmission = async (essay) => {
    setSubmiting(true);

    try {
      const result = await generateQuestions(essay);
      setGenerated(true);
      setQuestions(result);
    } catch (err) {
      console.log(err);
    }

    setSubmiting(false);
  };

  return (
    <Box bg="indigo01" height="100vh" display="flex" justifyContent="center">
      <Box bg="white" maxWidth="30em" width="100%">
        {isSubmiting ? (
          <LoadingFragment />
        ) : isGenerated ? (
          <QuizFragment questions={questions} />
        ) : (
          <HomeAndInputFragment handleEssaySubmission={handleEssaySubmission} />
        )}
      </Box>
    </Box>
  );
};

export default Home;

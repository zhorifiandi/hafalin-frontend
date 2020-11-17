import { useState } from "react";
import { Box } from "@aksara-ui/core";
import HomeAndInputFragment from "../components/fragment/home-and-input";
import LoadingFragment from "../components/fragment/loading";
import QuizFragment from "../components/fragment/quiz";
import EvaluationFragment from "../components/fragment/evaluation";
import generateQuestions from "../connections/generate-questions";

const Home = () => {
  const [essay, setEssay] = useState("");
  const [isSubmiting, setSubmiting] = useState(false);
  const [isGenerated, setGenerated] = useState(false);
  const [questionType, setQuestionType] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [evaluation, setEvaluation] = useState(null);
  const [questionError, setQuestionError] = useState(null);

  const handleEssaySubmission = async (essay, qType) => {
    setSubmiting(true);
    setEssay(essay);

    try {
      setQuestionType(qType);
      const result = await generateQuestions(essay, qType);
      setGenerated(true);
      setQuestions(result);
    } catch (err) {
      console.log(err);
      setQuestionError(err);
    }

    setSubmiting(false);
  };

  return (
    <Box bg="indigo01" minHeight="100vh" display="flex" justifyContent="center">
      <Box bg="#fdfdfd" maxWidth="30em" width="100%">
        {isSubmiting ? (
          <LoadingFragment />
        ) : isGenerated ? (
          evaluation ? (
            <EvaluationFragment evaluation={evaluation} />
          ) : (
            <QuizFragment
              essay={essay}
              questions={questions}
              questionType={questionType}
              setEvaluation={setEvaluation}
            />
          )
        ) : (
          <HomeAndInputFragment
            handleEssaySubmission={handleEssaySubmission}
            questionError={questionError}
          />
        )}
      </Box>
    </Box>
  );
};

export default Home;

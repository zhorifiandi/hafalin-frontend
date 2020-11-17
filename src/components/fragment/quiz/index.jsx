import { useState } from "react";
import { Box, Button, Text } from "@aksara-ui/core";
import QuizCard from "../../card/quiz";
import QuizSubmissionFragment from "./submission";
import evaluateAnswers from "../../../connections/evaluations";

const QuizFragment = ({ essay, questions, setEvaluation }) => {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswersChanged = (index, newValue) => {
    const newAnswers = {
      ...answers,
    };
    newAnswers[index] = newValue;
    setAnswers(newAnswers);
  };

  const PreviousButton = ({ index }) => {
    if (index > 0) {
      return (
        <Button
          onClick={() => {
            setPage(page - 1);
          }}
          variant="outline"
          mr="0.5rem"
        >
          Kembali
        </Button>
      );
    } else {
      return <></>;
    }
  };

  const NextButton = ({ index }) => {
    if (index < questions.length - 1) {
      return (
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
          variant="primary"
        >
          Lanjut
        </Button>
      );
    } else {
      return <></>;
    }
  };

  const SubmitButton = ({ index }) => {
    if (index == questions.length - 1) {
      return (
        <Button
          onClick={async () => {
            console.log("answers", answers);
            // alert(JSON.stringify(answers));

            const solutionSet = questions.map((question) => question.answer);
            const evaluations = await evaluateAnswers(answers, solutionSet);
            // alert(JSON.stringify(evaluations));
            setEvaluation(evaluations);
          }}
          variant="primary"
        >
          Submit
        </Button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Box p="2rem" display="flex" alignItems="center" minHeight="100vh">
      {questions.map((question, index) => (
        <>
          {index == page ? (
            <QuizCard
              index={page}
              essay={essay}
              questionSet={question}
              NextButton={NextButton}
              PreviousButton={PreviousButton}
              SubmitButton={SubmitButton}
              answers={answers}
              handleAnswersChanged={handleAnswersChanged}
            />
          ) : (
            <></>
          )}
        </>
      ))}
    </Box>
  );
};

export default QuizFragment;
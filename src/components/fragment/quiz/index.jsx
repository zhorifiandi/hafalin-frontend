import { useState } from "react";
import { Box, Button, Heading, Text } from "@aksara-ui/core";
import QuizCard from "../../card/quiz";
import QuizSubmissionFragment from "./submission";
import evaluateShortAnswers from "../../../connections/evaluations/short-answers";
import evaluateMultipleChoices from "../../../connections/evaluations/multiple-choices";

const QuizFragment = ({ essay, questions, questionType, setEvaluation }) => {
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

            const solutionSet = questions.map((question) => question.answer);
            let evaluations;
            if (questionType === "short_answer") {
              evaluations = await evaluateShortAnswers(answers, solutionSet);
            } else {
              evaluations = await evaluateMultipleChoices(answers, solutionSet);
            }

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
      <Box>
        <Heading scale="800" mb="2rem">
          {questionType === "short_answer" ? "Isian Singkat" : "Pilihan Ganda"}
        </Heading>
        {(questions || []).map((question, index) => (
          <>
            {index == page ? (
              <QuizCard
                index={page}
                essay={essay}
                questionSet={question}
                questionType={questionType}
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
    </Box>
  );
};

export default QuizFragment;

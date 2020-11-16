import { useState } from "react";
import { Box, Button, Text } from "@aksara-ui/core";
import QuizCard from "../../card/quiz";
import QuizSubmissionFragment from "./submission";

const QuizFragment = ({ questions }) => {
  const [page, setPage] = useState(0);
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
          onClick={() => {
            alert("mantap");
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
      {page < questions.length ? (
        <QuizCard
          index={page}
          questionSet={questions[page]}
          NextButton={NextButton}
          PreviousButton={PreviousButton}
          SubmitButton={SubmitButton}
        />
      ) : (
        <QuizSubmissionFragment />
      )}
    </Box>
  );
};

export default QuizFragment;

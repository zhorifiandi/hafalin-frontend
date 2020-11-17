import { Box, Button, Card, Heading, Text } from "@aksara-ui/core";

const EvaluationFragment = ({ evaluation }) => {
  const correctAnswer = evaluation.reduce((acc, currentValue) => {
    return currentValue ? acc + 1 : acc;
  }, 0);

  return (
    <Box p="2rem" display="flex" alignItems="center" minHeight="100vh">
      <Box width="100%">
        <Box>
          <Box p="2rem">
            <img src="/score.svg" height="150px" style={{ margin: "auto" }} />
          </Box>
          <Card mb="2rem" p="1.5rem" elevation="4" display="flex">
            <Box flexGrow="1">
              <Text>Skor Kamu adalah: </Text>
              <Heading>
                {Math.trunc((100 * correctAnswer) / evaluation.length)}%
              </Heading>
            </Box>
            <Box p="1rem" justifyContent="center">
              <Box>
                <Text scale="200">Jawaban Benar: {correctAnswer}</Text>
              </Box>
              <Box>
                <Text scale="200">
                  Jawaban Salah: {evaluation.length - correctAnswer}
                </Text>
              </Box>
            </Box>
          </Card>

          {/* <Box p="2rem">
            <Text>Debugging Purpose: {JSON.stringify(evaluation)}</Text>
          </Box> */}
        </Box>
        <Button
          variant="primary"
          onClick={() => window.location.reload()}
          width="100%"
        >
          Kembali ke Home
        </Button>
      </Box>
    </Box>
  );
};

export default EvaluationFragment;

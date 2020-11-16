import {
  Box,
  Card,
  Heading,
  InputRadio,
  InputRadioLabel,
  Text,
} from "@aksara-ui/core";

const QuizChoices = ({ choices }) => {
  return (
    <Box>
      <fieldset
        id="choice"
        onChange={(event) => console.log(event.target.value)}
        style={{ border: 0 }}
      >
        {Object.keys(choices).map((keyChoice) => (
          <>
            <InputRadioLabel htmlFor="choice" mb="1rem">
              <InputRadio
                value={keyChoice}
                id="choice"
                name="choice"
                style={{ marginRight: "0.5rem" }}
              />
              <Text>{choices[keyChoice]}</Text>
            </InputRadioLabel>
          </>
        ))}
      </fieldset>
    </Box>
  );
};

const QuizCard = ({
  index,
  questionSet,
  NextButton,
  PreviousButton,
  SubmitButton,
}) => {
  return (
    <Card p="1.5rem" elevation="4">
      <Heading mb="0.5rem" scale="300">
        Pertanyaan #{index + 1}
      </Heading>
      <Heading scale="500" mb="2rem">
        {questionSet.question}
      </Heading>
      <QuizChoices choices={questionSet.choices} />
      <Box textAlign="right">
        <PreviousButton index={index} />
        <NextButton index={index} />
        <SubmitButton index={index} />
      </Box>
    </Card>
  );
};

export default QuizCard;

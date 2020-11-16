import {
  Box,
  Card,
  Heading,
  InputRadio,
  InputRadioLabel,
  Text,
} from "@aksara-ui/core";

const QuizChoices = ({ answers, index, choices, handleAnswersChanged }) => {
  return (
    <Box>
      <form>
        <fieldset
          id={`choice-${index}`}
          value={answers[index]}
          onChange={(event) => {
            handleAnswersChanged(index, event.target.value);
          }}
          style={{ border: 0 }}
        >
          {Object.keys(choices).map((keyChoice) => (
            <Box>
              <InputRadioLabel htmlFor={`choice-${index}`} mb="1rem">
                <InputRadio
                  value={keyChoice}
                  id={`choice-${index}`}
                  name={`choice-${index}`}
                  checked={answers[index] == keyChoice}
                  style={{ marginRight: "0.5rem" }}
                />
                <Text>
                  {keyChoice}. {choices[keyChoice]}
                </Text>
              </InputRadioLabel>
            </Box>
          ))}
        </fieldset>
      </form>
    </Box>
  );
};

const QuizCard = ({
  index,
  questionSet,
  answers,
  handleAnswersChanged,
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
      <QuizChoices
        answers={answers}
        index={index}
        choices={questionSet.choices}
        handleAnswersChanged={handleAnswersChanged}
      />
      <Box textAlign="right">
        <PreviousButton index={index} />
        <NextButton index={index} />
        <SubmitButton index={index} />
      </Box>
    </Card>
  );
};

export default QuizCard;

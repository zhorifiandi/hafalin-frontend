import { useState } from 'react';
import {
  Box,
  Card,
  Heading,
  InputRadio,
  InputRadioLabel,
  InputText,
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

const QuizBlankInput = ({ answers, index, choices, handleAnswersChanged }) => {
    const [value, setValue] = useState(answers[index]);

    return (
        <Box mb="2rem">
            <InputText 
                id={`blank-input-${index}`}
                name={`blank-input-${index}`}
                value={value}
                onChange={(event) => {
                    console.log(index, event.target.value)
                    setValue(event.target.value)
                    handleAnswersChanged(index, event.target.value);
                  }}
                placeholder="Masukkan jawabanmu"
            />
        </Box>
    )
}

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
      {/* We're not using multiple choices yet */}
      {/* <QuizChoices
        answers={answers}
        index={index}
        choices={questionSet.choices}
        handleAnswersChanged={handleAnswersChanged}
      /> */}

      <QuizBlankInput 
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

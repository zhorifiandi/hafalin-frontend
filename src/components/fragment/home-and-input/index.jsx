import { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  InputMessage,
  InputRadio,
  InputRadioLabel,
  Text,
} from "@aksara-ui/core";
import { IconArrowRight } from "@aksara-ui/icons";

const SelectQuestionType = ({ questionType, setQuestionType }) => {
  
  return (
    <fieldset
      onChange={(event) => {
        setQuestionType(event.target.value);
      }}
      style={{ border: 0, display: "flex", padding: "1rem 0" }}
    >
      <Box flex="1">
        <InputRadioLabel>
          <InputRadio
            value="multiple_choice"
            checked={questionType === "multiple_choice"}
            style={{ marginRight: "0.5rem" }}
          />
          <Text>
            Pilihan Ganda
          </Text>
        </InputRadioLabel>
      </Box>
      <Box flex="1">
        <InputRadioLabel>
          <InputRadio
            value="short_answer"
            checked={questionType === "short_answer"}
            style={{ marginRight: "0.5rem" }}
          />
          <Text>Isian Singkat</Text>
        </InputRadioLabel>
      </Box>
    </fieldset>
  );
};

const HomeAndInputFragment = ({ handleEssaySubmission, questionError }) => {
  const textAreaRef = useRef(null);
  const [essay, setEssay] = useState("");
  const [questionType, setQuestionType] = useState("short_answer");

  return (
    <Box p="1rem" display="flex" flexDirection="column" minHeight="100vh">
      <Box p="1rem" mb="1rem">
        <Heading color="blue10">hafalin</Heading>
        <Text>by Tajong.ai</Text>
      </Box>
      <Box mt="auto" w="100%">
        <form
          onSubmit={(event) => {
            handleEssaySubmission(textAreaRef.current.value, questionType);
            event.preventDefault();
          }}
        >
          <Card p="1rem" m="1rem 0" elevation="4">
            <Box mb="0.5rem">
              <Text>Masukkan Paragrafmu Disini</Text>
            </Box>
            <textarea
              rows="10"
              style={{
                width: "100%",
                maxWidth: "100%",
                resize: "none",
                borderColor: "rgba(0,0,0,0.3)",
              }}
              onChange={(event) => {
                setEssay(event.target.value);
              }}
              ref={textAreaRef}
            />
            {
              questionError ? 
              (
                // ToDo: Handle error message
                <InputMessage variant="error">
                  Harap ulangi permintaan atau masukkan paragraf yang lebih panjang
                </InputMessage>
              ) : <></> 
            }
          </Card>
          <Card p="1rem" m="1rem 0" elevation="4">
            <Text>Jenis Pertanyaan yang akan dibuat:</Text>
            <SelectQuestionType questionType={questionType} setQuestionType={setQuestionType} />
          </Card>
          <Button
            disabled={essay.length === 0}
            type="submit"
            icon={IconArrowRight}
            iconPosition="right"
            mt="1rem"
            variant="primary"
            width="100%"
          >
            Klik disini untuk memulai
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default HomeAndInputFragment;

import { useRef, useState } from "react";
import { Box, Button, Heading, Text } from "@aksara-ui/core";
import { IconArrowRight } from "@aksara-ui/icons";

const HomeAndInputFragment = ({ handleEssaySubmission }) => {
  const textAreaRef = useRef(null);
  const [essay, setEssay] = useState("");

  return (
    <Box p="1rem" display="flex" flexDirection="column" minHeight="100vh">
      <Box mb="1rem">
        <Heading color="blue10">hafalin</Heading>
        <Text>by Tajong.ai</Text>
      </Box>
      <Box mt="auto" w="100%">
        <form
          onSubmit={(event) => {
            handleEssaySubmission(textAreaRef.current.value);
            event.preventDefault();
          }}
        >
          <Box>
            <Box mb="0.5rem">
              <Text>Masukkan Paragrafmu Disini</Text>
            </Box>
            <textarea
              rows="10"
              style={{
                width: "100%",
                maxWidth: "100%",
                resize: "none",
              }}
              onChange={(event) => {
                setEssay(event.target.value);
              }}
              ref={textAreaRef}
            />
          </Box>
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

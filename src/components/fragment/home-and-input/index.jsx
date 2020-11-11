import { Box, Button, Heading, Text } from "@aksara-ui/core";

const HomeAndInputFragment = () => {
  return (
    <Box p="1rem" display="flex" flexDirection="column" minHeight="100vh">
      <Box mb="1rem">
        <Heading color="blue10">hafalin</Heading>
        <Text>by Tajong.ai</Text>
      </Box>
      <Box mt="auto" w="100%">
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
          />
        </Box>
        <Button mt="1rem" variant="outline" width="100%">
          Klik disini untuk memulai
        </Button>
      </Box>
    </Box>
  );
};

export default HomeAndInputFragment;

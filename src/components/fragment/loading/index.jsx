import { Box, Circle, Text } from "@aksara-ui/core";

const LoadingFragment = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
    >
      <Box>
        <Box>
          <Circle size="100px" />
        </Box>
        <Box>
          <Text>Sedang menyiapkan pertanyaan...</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingFragment;

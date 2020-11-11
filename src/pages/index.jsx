import { Box } from "@aksara-ui/core";
import HomeAndInputFragment from "../components/fragment/home-and-input";

const Home = () => {
  return (
    <Box
      p="0 1rem"
      bg="indigo01"
      height="100vh"
      display="flex"
      justifyContent="center"
    >
      <Box bg="white" width="30em">
        <HomeAndInputFragment />
      </Box>
    </Box>
  );
};

export default Home;

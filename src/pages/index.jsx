import { Box } from "@aksara-ui/core";
import HomeAndInputFragment from "../components/fragment/home-and-input";

const Home = () => {
  return (
    <Box
      bg="indigo01"
      height="100vh"
      display="flex"
      justifyContent="center"
    >
      <Box bg="white" maxWidth="30em" width="100%">
        <HomeAndInputFragment />
      </Box>
    </Box>
  );
};

export default Home;

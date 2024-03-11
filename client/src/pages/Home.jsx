import { Box, Text, chakra } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Text fontSize={56} align="center" fontWeight={700}>
        Create accessible React <br /> apps{" "}
        <chakra.span color="teal">with speed</chakra.span>
      </Text>
    </Box>
  );
};

export default Home;

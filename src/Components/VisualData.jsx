import { Box, Text, Flex } from "@chakra-ui/react";
import map from "../Assets/map.svg";
// import donutChart from "../Assets/pieChart.svg";
// import legend from "../Assets/legend.svg";
// import numbers from "../Assets/numbers.svg";
// import smallMap from "../Assets/smallMap.svg";
import StateResult from "./StateResult";

const VisualData = () => {
  return (
    <>
      <Flex
        direction="column"
        gap="40px"
        w="100%"
        mb="77px"
        px="100px"
        pt="56px"
        as="section"
      >
        <Box border="0.5px solid #393C4A" borderRadius="20px">
          <img src={map} w="380px" h="337px" alt="map of Nigeria" />
        </Box>
        <Box border="0.5px solid #393C4A" borderRadius="20px" w="100%" gap={10}>
          <Text
            p="12px 10px 15px 18px"
            bg="#111421"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            fontSize="24px"
            fontWeight="500"
            color="white"
          >
            State Results
          </Text>
          <StateResult />
        </Box>
      </Flex>
    </>
  );
};

export default VisualData;

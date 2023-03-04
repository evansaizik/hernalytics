import { Box, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import map from "../Assets/map.svg";
import donutChart from "../Assets/pieChart.svg";
import legend from "../Assets/legend.svg";
import numbers from '../Assets/numbers.svg';
import smallMap from '../Assets/smallMap.svg'

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
        <Grid
          border="0.5px solid #393C4A"
          borderRadius="20px"
          w="100%"
          pt="40px"
          bg="#1C2031"
          templateColumns="repeat(4, 1fr)"
          gap={10}
        >
          <GridItem w="350px" h="337px">
            <Image
              src={donutChart}
              ml="10px"
              w="100%"
              h="300px"
              alt="pie chart"
            />
          </GridItem>
          <GridItem w="290px" h="250px">
            <Image src={smallMap} w="100%" h="100%" alt="small map" />
          </GridItem>
          <GridItem w="200px" ml="-10" h="337px">
            <Image src={legend} w="60%" h="340px" alt="legend" />
          </GridItem>
          <GridItem w="200px" ml="-50px" h="337px">
            <Image src={numbers} w="90%" h="280px" alt="numbers" />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default VisualData;

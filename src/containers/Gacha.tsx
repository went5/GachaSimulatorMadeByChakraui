import React, { useState } from "react";
import useGacha from "../hooks/use-gacha";
import ChakraTable from "../presentational/table/ChakraTable";
import ChakraNumberInput from "../presentational/numberinput/ChakraNumberInput";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ChakraButton from "../presentational/button/ChakraButton";

const CalcGacha = () => {
  const [gachasNum, calc] = useGacha();
  const [prob, setProb] = useState(0);
  const SetProb = (p: number) => setProb(p);

  return (
    <Box>
      <ChakraTable trialsNum={Number(gachasNum)} />
      <Flex mb={3}>
        <Center w="100px" bg="red.500">
          <Text color={"white"}>確率(%)</Text>
        </Center>
        <ChakraNumberInput calc={calc} setProb={SetProb} />
      </Flex>
      <Box mb={3} w="100%">
        <ChakraButton calc={calc} prob={prob} />
      </Box>
    </Box>
  );
};

export default CalcGacha;

import React, { useState } from "react";
import useGacha from "../hooks/use-gacha";
import ChakraTable from "../presentational/table/ChakraTable";
import ChakraNumberInput from "../presentational/numberinput/ChakraNumberInput";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ChakraButton from "../presentational/button/ChakraButton";
import OnceStoneInput from "../presentational/numberinput/OnceStoneInput";
import ProbablityInput from "../presentational/numberinput/ProbabilityInput";

const CalcGacha = () => {
  const [gachasNum, calc, totalStone, calcTotalStone, SetProb, SetOnceStone] =
    useGacha();
  return (
    <Box>
      <ChakraTable
        trialsNum={Number(gachasNum)}
        totalStone={Number(totalStone)}
      />
      <Flex mb={3}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>確率(%)</Text>
        </Center>
        <ProbablityInput calc={calc} setProb={SetProb} />
      </Flex>
      <Flex mb={3}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の課金石</Text>
        </Center>
        <OnceStoneInput calc={calcTotalStone} setStone={SetOnceStone} />
      </Flex>
      <Box mb={3} w="100%">
        <ChakraButton calc={calc} />
      </Box>
    </Box>
  );
};

export default CalcGacha;

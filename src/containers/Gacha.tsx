import React from "react";
import useGacha from "../hooks/use-gacha";
import ChakraTable from "../presentational/table/ChakraTable";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ChakraButton from "../presentational/button/ChakraButton";
import ProbablityInput from "../presentational/numberinput/ProbabilityInput";
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/states";
import ChakraNumberInput from "../presentational/numberinput/ChakraNumberInput";

const CalcGacha = () => {
  const [prob, setProb] = useRecoilState(inputState("probability"));
  const [onceStone, setOnceStone] = useRecoilState(inputState("onceStone"));
  const [onceMoney, setOnceMoney] = useRecoilState(inputState("onceMoney"));
  const [totalGatchas, totalStone, totalMoney, calc] = useGacha(
    prob,
    onceStone,
    onceMoney
  );

  return (
    <Box>
      <ChakraTable
        trialsNum={totalGatchas}
        totalStone={totalStone}
        totalMoney={totalMoney}
      />
      <Flex mb={3}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>確率(%)</Text>
        </Center>
        <ProbablityInput setProb={setProb} />
      </Flex>
      <Flex mb={3}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の課金石</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceStone} />
      </Flex>
      <Flex mb={3}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の値段</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceMoney} />
      </Flex>
      <Box mb={3} w="100%">
        <ChakraButton calc={calc} />
      </Box>
    </Box>
  );
};

export default CalcGacha;

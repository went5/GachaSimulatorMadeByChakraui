import React from "react";
import useGacha from "../hooks/use-gacha";
import ChakraTable from "../presentational/table/ChakraTable";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ChakraButton from "../presentational/button/ChakraButton";
import ProbablityInput from "../presentational/numberinput/ProbabilityInput";
import { useRecoilState } from "recoil";
import { inputState,pointState } from "../atoms/states";
import ChakraNumberInput from "../presentational/numberinput/ChakraNumberInput";
import SparkNumberInput from "../presentational/numberinput/SparkNumberInput";
import PointNumberInput from '../presentational/numberinput/PointNumberInput';

const CalcGacha = () => {
  const [prob, setProb] = useRecoilState(inputState("probability"));
  const [onceStone, setOnceStone] = useRecoilState(inputState("onceStone"));
  const [onceMoney, setOnceMoney] = useRecoilState(inputState("onceMoney"));
  const [spark, setSpark] = useRecoilState(inputState("spark"));
  const [points, setPoints] = useRecoilState(pointState);
  const [totalGatchas, totalStone, totalMoney, calc] = useGacha(
    prob,
    onceStone,
    onceMoney,
    spark,
    points
  );

  return (
    <Box>
      <ChakraTable
        trialsNum={totalGatchas}
        totalStone={totalStone}
        totalMoney={totalMoney}
      />
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>確率(%)</Text>
        </Center>
        <ProbablityInput setProb={setProb} />
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の課金石</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceStone} />
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の値段</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceMoney} />
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>天井までの回数</Text>
        </Center>
        <SparkNumberInput setValue={setSpark} />
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>獲得個数</Text>
        </Center>
        <PointNumberInput setValue={setPoints} />
      </Flex>
      <Box mt={10} w="100%">
        <ChakraButton calc={calc} />
      </Box>
    </Box>
  );
};

export default CalcGacha;

import React from "react";
import useGacha from "../hooks/use-gacha";
import ChakraTable from "../presentational/table/ChakraTable";
import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ChakraButton from "../presentational/button/ChakraButton";
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/states";
import ChakraNumberInput from "../presentational/numberinput/ChakraNumberInput";

const CalcGacha = () => {
  const [prob, setProb] = useRecoilState(inputState("probability"));
  const [onceStone, setOnceStone] = useRecoilState(inputState("onceStone"));
  const [onceMoney, setOnceMoney] = useRecoilState(inputState("onceMoney"));
  const [spark, setSpark] = useRecoilState(inputState("spark"));
  const [points, setPoints] = useRecoilState(inputState("points"));
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
        <ChakraNumberInput setValue={setProb} min={0} max={100}/>
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の課金石</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceStone} min={0}/>
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>1回分の値段</Text>
        </Center>
        <ChakraNumberInput setValue={setOnceMoney} min={0}/>
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>天井までの回数</Text>
        </Center>
        <ChakraNumberInput setValue={setSpark} min={0} />
      </Flex>
      <Flex mt={2.5}>
        <Center w="150px" bg="red.500">
          <Text color={"white"}>獲得個数</Text>
        </Center>
        <ChakraNumberInput setValue={setPoints} dV={1}/>
      </Flex>
      <Box mt={10} w="100%">
        <ChakraButton calc={calc} />
      </Box>
    </Box>
  );
};

export default CalcGacha;

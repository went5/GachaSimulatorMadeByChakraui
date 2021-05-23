import React, { VFC, useState } from "react";
import {
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";

type Props = {
  calc: (prob: number) => void;
  setProb:(p:number)=>void;
};

const ChakraNumberInput: VFC<Props> = ({ calc,setProb }) => {

  return (
    <NumberInput
      onChange={(value) => {
        calc(Number(value));
        setProb(Number(value));
      }}
      max={50}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ChakraNumberInput;

import React, { VFC } from "react";
import {
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";


const ChakraNumberInput: VFC<{setValue:(p:number)=>void}> = ({ setValue }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setValue(Number(value));
      }}
      defaultValue={0}
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

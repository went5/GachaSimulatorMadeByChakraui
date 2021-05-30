import React, { VFC } from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";


const ChakraNumberInput: VFC<{setValue:(p:number)=>void}> = ({ setValue }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setValue(Number(value));
      }}
      min={0}

    >
      <NumberInputField />
      <NumberInputStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ChakraNumberInput;

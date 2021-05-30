import React, { VFC } from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";

const ChakraNumberInput: VFC<{
  setValue: (p: number) => void;
  min?: number;
  max?: number;
  dV?: number;
}> = ({ setValue, min, max,dV }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setValue(Number(value));
      }}
      max={max ?? max}
      defaultValue={dV ?? dV}
      min={min ?? min}
    >
      <NumberInputField />
      <NumberInputStepper></NumberInputStepper>
    </NumberInput>
  );
};

export default ChakraNumberInput;

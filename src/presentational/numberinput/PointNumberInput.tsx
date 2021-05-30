import React, { VFC } from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";


const PointNumberInput: VFC<{setValue:(p:number)=>void}> = ({ setValue }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setValue(Number(value));
      }}
      defaultValue={1}
      min={0}
    >
      <NumberInputField />
      <NumberInputStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};

export default PointNumberInput;

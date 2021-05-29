import React, { VFC } from "react";
import {
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";


const PointNumberInput: VFC<{setValue:(p:number)=>void,dv?:number}> = ({ setValue,dv }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setValue(Number(value));
      }}
      defaultValue={dv?dv:0}
      min={0}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default PointNumberInput;

import React, { VFC } from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";

const ProbablityInput: VFC<{ setProb: (p: number) => void }> = ({
  setProb,
}) => {
  return (
    <NumberInput
      onChange={(value) => {
        setProb(Number(value));
      }}
      max={100}
      min={0}
    >
      <NumberInputField />
      <NumberInputStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ProbablityInput;

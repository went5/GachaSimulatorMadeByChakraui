import React, { VFC } from "react";
import {
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";

type Props = {
  calc: () => void;
  setProb: (p: number) => void;
};

const ProbablityInput: VFC<Props> = ({ calc, setProb }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setProb(Number(value));
        calc();
      }}
      max={100}
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

export default ProbablityInput;

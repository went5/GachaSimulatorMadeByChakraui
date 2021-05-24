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
  setStone: (p: number) => void;
};

const OnceStoneInput: VFC<Props> = ({ calc, setStone }) => {
  return (
    <NumberInput
      onChange={(value) => {
        setStone(Number(value));
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

export default OnceStoneInput;

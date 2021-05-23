import React, { VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  calc: (prob: number) => void;
  prob: number;
};

const ChakraButton: VFC<Props> = ({ calc, prob }) => {
  return (
    <Button
      w="100%"
      colorScheme="blue"
      onClick={() => {
        calc(prob);
        console.log('hoi');
        
      }}
    >
      引く
    </Button>
  );
};

export default ChakraButton;

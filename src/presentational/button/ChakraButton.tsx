import React, { VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  calc: () => void;
};

const ChakraButton: VFC<Props> = ({ calc }) => {
  return (
    <Button
      w="100%"
      colorScheme="blue"
      onClick={() => {
        calc();
      }}
    >
      引く
    </Button>
  );
};

export default ChakraButton;

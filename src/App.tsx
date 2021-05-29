import React from "react";
import "./App.css";
import { ChakraProvider, Box } from '@chakra-ui/react';
import ChakraHeader from "./presentational/header/ChakraHeader";
import CalcGacha from "./containers/Gacha";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Box mr={5} ml={5}>
          <ChakraHeader />
          <CalcGacha />
        </Box>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;

import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraHeader from "./presentational/header/ChakraHeader";
import CalcGacha from "./containers/Gacha";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <ChakraHeader />
        <CalcGacha />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;

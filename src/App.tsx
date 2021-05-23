import React, { SyntheticEvent, useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  Grid,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import ChakraHeader from "./presentational/header/ChakraHeader";
import CalcGacha from "./containers/Gacha";

const App = () => {
  return (
    <ChakraProvider>
      <ChakraHeader />
      <CalcGacha />

    </ChakraProvider>
  );
};

export default App;

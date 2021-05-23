import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { GiPresent } from "react-icons/gi";

const ChakraHeader = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    pt={6}
    pb={6}
    mb={6}
    bg="white"
    color="black"
    borderBottomWidth="1px"
  >
    <Flex align="center" mr={5}>
      <Icon as={GiPresent} w={8} h={8} color="red" />
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Gacha Simulator
      </Heading>
    </Flex>
  </Flex>
);

export default ChakraHeader;

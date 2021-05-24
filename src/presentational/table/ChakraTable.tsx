import React, { VFC } from "react";
import {
  TableCaption,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@chakra-ui/react";

const ChakraTable: VFC<{ trialsNum: number,totalStone:number }> = ({ trialsNum,totalStone }) => (
  <Table variant="striped">
    <TableCaption>Created by Rruryu</TableCaption>

    <Tbody>
      <Tr>
        <Td>試行回数</Td>
        <Td isNumeric>{trialsNum}</Td>
      </Tr>
      <Tr>
        <Td>合計金額</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>合計課金石</Td>
        <Td isNumeric>{totalStone}</Td>
      </Tr>
    </Tbody>
  </Table>
);

export default ChakraTable;

import React, { VFC } from "react";
import { TableCaption, Table, Tr, Td, Tbody } from "@chakra-ui/react";

const ChakraTable: VFC<{
  trialsNum: number;
  totalStone: number;
  totalMoney: number;
}> = ({ trialsNum, totalStone, totalMoney }) => (
  <Table variant="striped">
    <TableCaption>Created by Went5</TableCaption>

    <Tbody>
      <Tr>
        <Td>試行回数</Td>
        <Td isNumeric>{trialsNum ? trialsNum : 0}回</Td>
      </Tr>
      <Tr>
        <Td>合計課金石</Td>
        <Td isNumeric>{totalStone ? totalStone : 0}個</Td>
      </Tr>
      <Tr>
        <Td>合計金額</Td>
        <Td isNumeric>{totalMoney ? totalMoney : 0}円</Td>
      </Tr>
    </Tbody>
  </Table>
);

export default ChakraTable;

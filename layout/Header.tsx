import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => (
  <header>
    <Flex
      position={"fixed"}
      w={"full"}
      h={20}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#dfdfdf"}
    >
      <Text>header</Text>
    </Flex>
    <Box w={"full"} h={20} bg={"white"} />
  </header>
);

export default Header;

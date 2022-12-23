import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <Flex
        w={"full"}
        h={20}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#dfdfdf"}
      >
        <Text>footer</Text>
      </Flex>
    </footer>
  );
};

export default Footer;

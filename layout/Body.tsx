import React from "react";
import { Flex } from "@chakra-ui/react";

type BodyProps = {
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <body style={{ display: "contents" }}>
      <Flex w={"full"} flex={1} bg={"#d0d0d0"}>
        {children}
      </Flex>
    </body>
  );
};

export default Body;

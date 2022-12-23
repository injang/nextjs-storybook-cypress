import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { HydrationGuard } from "@components/common/HydrationGuard";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const CommonLayout = ({ children }: LayoutProps) => {
  return (
    <Flex w={"full"} minH={"100vh"} flexDirection={"column"}>
      <HydrationGuard>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </HydrationGuard>
    </Flex>
  );
};

export default CommonLayout;

import type { NextPage } from "next";
import { Button, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { LoginModal } from "@components/login/LoginModal";

const HomePage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack w={"full"} h={"full"} spacing={0}>
      <Button onClick={onOpen}>로그인 모달</Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};

export default HomePage;

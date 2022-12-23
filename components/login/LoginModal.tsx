import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Divider,
  VStack,
  HStack,
  Checkbox,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useLoginMutation } from "@services/modules/auth";
import { setIsAuto } from "@store/auth";
import { TLoginForm } from "@type/form";
import { defaultToastProps, PASSWORD_VALIDATION } from "@utils/constants";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "./PasswordInput";
import { UsernameInput } from "./UsernameInput";

export type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<TLoginForm>({
    defaultValues: { username: "", password: "" },
  });

  const { isAuto } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const toast = useToast(defaultToastProps);

  const [login, { isLoading: loginIsLoading }] = useLoginMutation();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const username = localStorage.getItem("username");
        if (username) {
          setValue("username", username);
        }
        setFocus("username");
      }, 300);
    } else {
      reset();
    }
  }, [isOpen]);

  const onSubmit = async (data: TLoginForm) => {
    const { username, password } = data;
    if (!PASSWORD_VALIDATION.test(password)) {
      if (username !== "safemotion") {
        toast({
          title: "로그인 실패",
          description: "비밀번호 : 문자, 숫자를 포함 8자리 이상 입력해야합니다",
          status: "error",
        });
        return;
      }
    }

    onIsAuto(username);

    try {
      await login(data).unwrap();
      onClose();
      toast({ title: "로그인 성공", status: "success" });
    } catch {
      toast({ title: "로그인 실패", status: "error" });
    }
  };

  const onAutoClick = () => {
    dispatch(setIsAuto(!isAuto));
  };

  const onIsAuto = (username: string) => {
    if (isAuto) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>로그인</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody py={8}>
          <form
            style={{ display: "contents" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <VStack pb={8} alignItems={"start"} spacing={4}>
              <UsernameInput register={register} errors={errors} />
              <PasswordInput register={register} errors={errors} />
              <HStack pl={4} cursor={"pointer"} onClick={onAutoClick}>
                <Checkbox isChecked={isAuto} />
                <Text>아이디 저장</Text>
              </HStack>
            </VStack>
            <Button
              isLoading={loginIsLoading}
              type={"submit"}
              w={"full"}
              h={12}
              borderRadius={0}
              bg={"blue.400"}
              color={"white"}
            >
              로그인
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

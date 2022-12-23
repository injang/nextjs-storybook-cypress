import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  chakra,
  FormControl,
} from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { TLoginAPI } from "@type/api";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);
const CAiFillWarning = chakra(AiFillWarning);

type PasswordInputProps = {
  register: UseFormRegister<TLoginAPI>;
  errors: FieldErrorsImpl<TLoginAPI>;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  register,
  errors,
}) => {
  const [show, setShow] = React.useState(false);
  const handleShowClick = () => setShow(!show);

  return (
    <FormControl>
      <InputGroup>
        <Input
          placeholder={"비밀번호"}
          type={show ? "text" : "password"}
          _placeholder={{ color: errors?.password ? "#ff6e6e" : undefined }}
          minLength={8}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "최소 8자 이상 입력해야합니다",
            },
            maxLength: {
              value: 20,
              message: "최대 20자 이하 입력해야합니다",
            },
          })}
        />
        <InputLeftElement pointerEvents={"none"}>
          {errors?.password ? (
            <CFaLock color={"red.300"} />
          ) : (
            <CFaLock color={"gray.300"} />
          )}
        </InputLeftElement>
        {errors?.password ? (
          <InputRightElement pointerEvents={"none"}>
            <CAiFillWarning size={20} color={"#ff6e6e"} />
          </InputRightElement>
        ) : (
          <InputRightElement h={"full"}>
            <Button
              variant={"unstyled"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={handleShowClick}
            >
              {show ? (
                <CFaEyeSlash color={"gray.300"} />
              ) : (
                <CFaEye color={"gray.300"} />
              )}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

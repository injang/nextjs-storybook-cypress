import React from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  chakra,
  FormControl,
} from "@chakra-ui/react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { TLoginAPI } from "@type/api";
import { FaUserAlt } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";

const CFaUserAlt = chakra(FaUserAlt);
const CAiFillWarning = chakra(AiFillWarning);

type UsernameInputProps = {
  register: UseFormRegister<TLoginAPI>;
  errors: FieldErrorsImpl<TLoginAPI>;
};

export const UsernameInput: React.FC<UsernameInputProps> = ({
  register,
  errors,
}) => (
  <FormControl>
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <CFaUserAlt color={errors.username ? "#ff6e6e" : "gray.300"} />
      </InputLeftElement>
      {errors.username && (
        <InputRightElement pointerEvents={"none"}>
          <CAiFillWarning size={20} color={"#ff6e6e"} />
        </InputRightElement>
      )}
      <Input
        placeholder={"계정"}
        _placeholder={{ color: errors.username ? "#ff6e6e" : undefined }}
        {...register("username", { required: true })}
      />
    </InputGroup>
  </FormControl>
);

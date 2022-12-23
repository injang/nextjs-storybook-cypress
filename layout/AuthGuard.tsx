import React, { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
  useTokenRefreshMutation,
  useTokenVerifyMutation,
} from "@services/modules/auth";
import { logout } from "@store/auth";
import { useToast } from "@chakra-ui/react";
import { defaultToastProps } from "@utils/constants";
import { useRouter } from "next/router";

type AuthGuardProps = {
  children: ReactNode;
};

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const toast = useToast(defaultToastProps);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  const [tokenVerify] = useTokenVerifyMutation();
  const [tokenRefresh] = useTokenRefreshMutation();

  useEffect(() => {
    if (token && token.access) {
      onTokenVerify();
    } else if (!token) {
      onLoginPage();
    }
  }, []);

  const onTokenVerify = async () => {
    if (!token?.access) {
      onLoginPage();
      return;
    }

    try {
      await tokenVerify({ token: token.access }).unwrap();
    } catch (e) {
      await onTokenRefresh();
    }
  };

  const onTokenRefresh = async () => {
    if (!token?.refresh) {
      onLoginPage();
      return;
    }

    try {
      await tokenRefresh({ refresh: token.refresh }).unwrap();
    } catch (e) {
      toast({
        title: "토큰 만료",
        description: "토큰이 만료되었습니다",
        status: "error",
      });
      onLoginPage();
    }
  };

  const onLoginPage = () => {
    dispatch(logout());
    router.replace("/");
  };

  return <>{children}</>;
};

export default AuthGuard;

import { ToastProps } from "@chakra-ui/react";

export const initPaginationResult = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export const defaultToastProps: ToastProps = {
  duration: 3000,
  position: "top",
};

export const POPUP_ICON_SIZE = 8;
export const ICON_SIZE = 6;

export const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,20})/;

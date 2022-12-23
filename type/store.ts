import { TToken } from "@type/common";

export type TAuthState = {
  token: TToken | null;
  isAuto: boolean;
};

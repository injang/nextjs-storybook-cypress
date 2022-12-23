import { api } from "@services/api";
import { login, tokenRefresh, tokenVerify } from "@services/modules/auth/api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: login(build),

    tokenRefresh: tokenRefresh(build),
    tokenVerify: tokenVerify(build),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useTokenRefreshMutation,
  useTokenVerifyMutation,
} = userApi;

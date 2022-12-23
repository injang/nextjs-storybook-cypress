import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import type { TLoginAPI } from "@type/api";
import { TToken } from "@type/common";

export const login = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TToken, TLoginAPI>({
    query: ({ username, password }) => ({
      url: `/api/token/`,
      method: "POST",
      body: {
        username,
        password,
      },
    }),
  });

/**
 * 토큰 갱신
 * @param {string} refresh
 * @returns {TToken} token
 */
export const tokenRefresh = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TToken, { refresh: string }>({
    query: ({ refresh }) => ({
      url: `/api/token/refresh/`,
      method: "POST",
      body: {
        refresh,
      },
    }),
  });

/**
 * 토큰 확인
 * @param {string} token
 * @returns {undefined} return {} is verify success, but return error is token verify failure
 */
export const tokenVerify = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<{}, { token: string }>({
    query: ({ token }) => ({
      url: `/api/token/verify/`,
      method: "POST",
      body: {
        token,
      },
    }),
  });

import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Config } from "@config/index";
import { RootState } from "@store/index";

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).user;
    if (token) {
      headers.set("authorization", `Bearer ${token.access}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (process.env.NODE_ENV === "development") {
    if (result.error && result.error.status == 401) {
      console.log("response : ", result.error);
    }
    console.log("response :", result);
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});

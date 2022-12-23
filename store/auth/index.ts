import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userApi } from "@services/modules/auth";
import { TAuthState } from "@type/store";
import { TToken } from "@type/common";

const initialState: TAuthState = {
  token: null,
  isAuto: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<TToken>) => {
      state.token = payload;
    },
    logout: (state) => {
      state.token = null;

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
    setIsAuto: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuto = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }: PayloadAction<TToken>) => {
        state.token = payload;

        localStorage.setItem("access", payload.access);
        localStorage.setItem("refresh", payload.refresh);
      }
    );
  },
});

export const { setToken, logout, setIsAuto } = slice.actions;

export default slice.reducer;

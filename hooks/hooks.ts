import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, Reducer } from "@store/index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<Reducer> = useSelector;

export { useAppDispatch, useAppSelector };

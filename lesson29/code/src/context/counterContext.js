import { createContext } from "react";
import { initianCounterState } from "../services/store/counter/index.js";

export const counterContext = createContext(initianCounterState);
export const counterDispatchContext = createContext(null);

export const CounterProvider = counterContext.Provider;
export const CounterDispatchProvider = counterDispatchContext.Provider;

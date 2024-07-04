import { App } from "./App.jsx";
import { CounterProvider, CounterDispatchProvider } from "./context";
import { useReducer } from "react";
import {
  counterReducer,
  initianCounterState,
} from "./services/store/counter/index.js";
import { Provider } from "react-redux";
import { store } from "./store";

export function AppWrapper() {
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    initianCounterState,
  );

  return (
    <Provider store={store}>
      <CounterProvider value={counterState}>
        <CounterDispatchProvider value={dispatchCounter}>
          <App />
        </CounterDispatchProvider>
      </CounterProvider>
    </Provider>
  );
}

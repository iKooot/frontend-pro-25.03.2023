import { Provider } from "react-redux";
import { App } from "./App.jsx";
import { store } from "./store";

export function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

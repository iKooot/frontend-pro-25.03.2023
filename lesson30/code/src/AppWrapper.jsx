import { Provider } from "react-redux";
import { App } from "./App.jsx";
import { store } from "./services/store.js";

export function AppWrapper() {
  return (
    <Provider store={store}>
          <App />
    </Provider>
  );
}

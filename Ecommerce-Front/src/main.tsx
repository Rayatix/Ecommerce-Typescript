import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter";

// Styles
import "@styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux
import { Provider } from "react-redux";
import { store } from "@store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
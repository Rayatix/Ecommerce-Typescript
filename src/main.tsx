import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";

// Redux
import { Provider } from "react-redux";
import { store } from "@store/store";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "/public/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

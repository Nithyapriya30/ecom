import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { store } from "./Store";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store} >
          <App />
     </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

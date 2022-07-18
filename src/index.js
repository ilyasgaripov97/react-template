import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";
import { store } from "./redux/store";

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);
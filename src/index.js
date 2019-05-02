import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/_root-reducer";
import { loadLocalStore, saveLocalStore } from "./redux/local-store";

import { GlobalStyle } from "./index.style";
import App from "./components/App";

const loadedStore = loadLocalStore();

const store = createStore(rootReducer, loadedStore, applyMiddleware(thunk));

store.subscribe(() => {
  saveLocalStore({
    Pokemon: store.getState().Pokemon
  });
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

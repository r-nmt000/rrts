import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

interface AppProps {
    color?: string;
}

const store = createStore(reducers, applyMiddleware(thunk));

interface AppState {
    counter: number;
}


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
    document.querySelector('#root')
);


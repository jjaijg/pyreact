import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "../store";

import Header from "./layout/Header";
import Dashboard from "./names/Dashboard";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

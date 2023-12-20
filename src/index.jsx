import React from "react";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"
import { Provider } from "react-redux";
import store from "./component/store/store.js";


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
         <App/>
     </Provider>
    </BrowserRouter>
   ,document.getElementById("root")
)
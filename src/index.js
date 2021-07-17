import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.sass';
import {Provider} from "react-redux";
import store from "./store/configureStore";

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'));

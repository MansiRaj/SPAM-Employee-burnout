import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,combineReducers} from "redux";
import allReducer from "./reducers/index";
let store=createStore(allReducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());

 ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>,
   document.getElementById('root')
 );



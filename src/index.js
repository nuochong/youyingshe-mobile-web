import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducer/main';
import api from './api/api';
import indexReducer from './index.reducer'

//合并reducer
let reducer = combineReducers({
	main: mainReducer,
	index: indexReducer
})
const store = createStore(reducer);

React.Component.prototype.api = api;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

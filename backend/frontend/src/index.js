import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { ToastContainer, Zoom } from 'react-toastify';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer transition={Zoom} />
    <App />
  </Provider>,
  document.getElementById('app')
);

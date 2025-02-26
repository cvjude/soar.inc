import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <Provider store={store}>
      <HydratedRouter />
    </Provider>
  </React.StrictMode>,
);

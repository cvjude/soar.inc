import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { UserProvider } from 'contexts/userContext';
import './index.css';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <UserProvider>
      <HydratedRouter />
    </UserProvider>
  </React.StrictMode>,
);

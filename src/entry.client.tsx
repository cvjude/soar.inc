import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';
import { UserProvider } from 'contexts/userContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { handleError } from 'utils/helpers';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => handleError(error),
  }),
});

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <HydratedRouter />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

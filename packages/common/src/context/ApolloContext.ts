import React from 'react';
import ApolloClient from 'apollo-client';

export interface ApolloContextValue {
  client?: ApolloClient<object>;
  renderPromises?: Record<any, any>;
}

let apolloContext: React.Context<ApolloContextValue>;

export function getApolloContext(client?: ApolloContextValue['client']) {
  if (!apolloContext) {
    const defaultContext = client ? { client } : {};
    apolloContext = React.createContext<ApolloContextValue>(defaultContext);
  }
  return apolloContext;
}

export function resetApolloContext() {
  apolloContext = React.createContext<ApolloContextValue>({});
}

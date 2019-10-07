import React from 'react';
var apolloContext;
export function getApolloContext(client) {
    if (!apolloContext) {
        var defaultContext = client ? { client: client } : {};
        apolloContext = React.createContext(defaultContext);
    }
    return apolloContext;
}
export function resetApolloContext() {
    apolloContext = React.createContext({});
}
//# sourceMappingURL=ApolloContext.js.map